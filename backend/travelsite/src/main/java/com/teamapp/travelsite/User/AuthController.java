package com.teamapp.travelsite.User;

import com.teamapp.travelsite.Config.AppProperties;
import com.teamapp.travelsite.Exception.BadRequestException;
import com.teamapp.travelsite.Model.Entity.UserRefreshToken;
import com.teamapp.travelsite.Model.Repository.UserRefreshTokenRepository;
import com.teamapp.travelsite.User.OAuthPayload.SignUpRequest;
import com.teamapp.travelsite.Model.Repository.TempMailRepository;
import com.teamapp.travelsite.Model.Repository.UserRepository;
import com.teamapp.travelsite.User.OAuthPayload.ApiResponse;
import com.teamapp.travelsite.User.OAuthPayload.LoginRequest;
import com.teamapp.travelsite.User.OAuthPayload.SignUpMailRequest;
import com.teamapp.travelsite.Model.Entity.TempMail;
import com.teamapp.travelsite.Model.Entity.User;
import com.teamapp.travelsite.User.token.AuthToken;
import com.teamapp.travelsite.User.token.AuthTokenProvider;
import com.teamapp.travelsite.util.CookieUtils;
import com.teamapp.travelsite.util.HeaderUtil;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.net.URI;
import java.util.Date;
import java.util.Random;


@RestController
@RequestMapping("/auth")
public class AuthController {

	private AppProperties appProperties;
	private AuthTokenProvider tokenProvider;

	private UserRefreshTokenRepository userRefreshTokenRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;
    
	@Autowired
	private TempMailRepository tempMailRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

	@Autowired
	private CustomUserDetailsService CUDService;

	private final static long THREE_DAYS_MSEC = 259200000;
	private final static String REFRESH_TOKEN = "refresh_token";

    @PostMapping("/login")
    public ApiResponse authenticateUser(
			HttpServletRequest request,
			HttpServletResponse response,
			@RequestBody LoginRequest loginRequest
	) {
		//인증정보 생성
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						loginRequest.getEmail(),
						loginRequest.getPassword()
				)
		);
		
		
		String email = loginRequest.getEmail();
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		//토큰 정보 수집
		Date now = new Date();
		AuthToken accessToken = tokenProvider.createAuthToken(
				email,
				((UserPrincipal) authentication.getPrincipal()).getRoleType().getCode(),
				new Date(now.getTime() + appProperties.getAuth().getTokenExpiry())
		);
		long refreshTokenExpiry = appProperties.getAuth().getRefreshTokenExpiry();
		AuthToken refreshToken = tokenProvider.createAuthToken(
				appProperties.getAuth().getTokenSecret(),
				new Date(now.getTime() + refreshTokenExpiry)
		);

		// email refresh token 으로 DB 확인
		UserRefreshToken userRefreshToken = userRefreshTokenRepository.findByUserEmail(email);
		if (userRefreshToken == null) {
			// 없는 경우 새로 등록
			userRefreshToken = new UserRefreshToken(email, refreshToken.getToken());
			userRefreshTokenRepository.saveAndFlush(userRefreshToken);
		} else {
			// DB에 refresh 토큰 업데이트
			userRefreshToken.setRefreshToken(refreshToken.getToken());
		}

		int cookieMaxAge = (int) refreshTokenExpiry / 60;
		CookieUtils.deleteCookie(request, response, REFRESH_TOKEN);
		CookieUtils.addCookie(response, REFRESH_TOKEN, refreshToken.getToken(), cookieMaxAge);

		return ApiResponse.success("token", accessToken.getToken());
    }

	@GetMapping("/refresh")
	public ApiResponse refreshToken (HttpServletRequest request, HttpServletResponse response) {
		// access token 확인
		String accessToken = HeaderUtil.getAccessToken(request);
		AuthToken authToken = tokenProvider.convertAuthToken(accessToken);
		if (!authToken.validate()) {
			return ApiResponse.invalidAccessToken();
		}

		// expired access token 인지 확인
		Claims claims = authToken.getExpiredTokenClaims();
		if (claims == null) {
			return ApiResponse.notExpiredTokenYet();
		}

		String userId = claims.getSubject();
		RoleType roleType = RoleType.of(claims.get("role", String.class));

		// refresh token
		String refreshToken = CookieUtils.getCookie(request, REFRESH_TOKEN)
				.map(Cookie::getValue)
				.orElse((null));
		AuthToken authRefreshToken = tokenProvider.convertAuthToken(refreshToken);

		if (authRefreshToken.validate()) {
			return ApiResponse.invalidRefreshToken();
		}

		// userId refresh token 으로 DB 확인
		UserRefreshToken userRefreshToken = userRefreshTokenRepository.findByUserIdAndRefreshToken(userId, refreshToken);
		if (userRefreshToken == null) {
			return ApiResponse.invalidRefreshToken();
		}

		Date now = new Date();
		AuthToken newAccessToken = tokenProvider.createAuthToken(
				userId,
				roleType.getCode(),
				new Date(now.getTime() + appProperties.getAuth().getTokenExpiry())
		);

		long validTime = authRefreshToken.getTokenClaims().getExpiration().getTime() - now.getTime();

		// refresh 토큰 기간이 3일 이하로 남은 경우, refresh 토큰 갱신
		if (validTime <= THREE_DAYS_MSEC) {
			// refresh 토큰 설정
			long refreshTokenExpiry = appProperties.getAuth().getRefreshTokenExpiry();

			authRefreshToken = tokenProvider.createAuthToken(
					appProperties.getAuth().getTokenSecret(),
					new Date(now.getTime() + refreshTokenExpiry)
			);

			// DB에 refresh 토큰 업데이트
			userRefreshToken.setRefreshToken(authRefreshToken.getToken());

			int cookieMaxAge = (int) refreshTokenExpiry / 60;
			CookieUtils.deleteCookie(request, response, REFRESH_TOKEN);
			CookieUtils.addCookie(response, REFRESH_TOKEN, authRefreshToken.getToken(), cookieMaxAge);
		}

		return ApiResponse.success("token", newAccessToken.getToken());
	}


    @PostMapping("/emailAuth")
    public String registerMail(@Valid @RequestBody SignUpMailRequest signUpMailRequest) throws Exception {
        if (userRepository.existsByEmail(signUpMailRequest.getEmail())) {
            throw new BadRequestException("Email address already in use.");
        }
        
        Random ran = new Random();

        long ranId = ran.nextInt(999)+1;



        TempMail tempMail = new TempMail();
        tempMail.setId(ranId);
        tempMail.setEmail(signUpMailRequest.getEmail());
        tempMail.setEmailAuth(false);
        tempMail.setEmailAuthKey(CUDService.creatEmailAuth());

        //sendEmail((String) signUpMailRequest.getEmail(), tempMail.getEmailAuthKey());

        tempMailRepository.save(tempMail);

//        "redirect:/auth/AuthSuccess?userEmail=" +
		return signUpMailRequest.getEmail(); 
        //대기페이지에서 메일 승인완료 누르면 가입창으로 

    }

    @GetMapping("/AuthSuccess")
    public Boolean authSuccess(@RequestParam("userEmail") String userEmail)throws Exception {

        if (!tempMailRepository.searchEmailAuth(userEmail).equals("1")){
            throw new BadRequestException("이메일 인증을 완료해주세요.");

        }

        return true;
    }
	

	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
		User user = new User();
		user.setName(signUpRequest.getName());
		user.setEmail(signUpRequest.getEmail());
		user.setPassword(signUpRequest.getPassword());
		user.setProvider(AuthProvider.local);
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		User result = userRepository.save(user);
		
		
		URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/user/me")
				.buildAndExpand(result.getId()).toUri();
        tempMailRepository.delete(tempMailRepository.findByEmail(signUpRequest.getEmail()).get());

		
		return ResponseEntity.created(location).body(new ApiResponse<T>(true, "User registered successfully@"));
	
	}

	// 메일 보내기
	public ModelAndView sendEmail(String email, String emailAuthKey) throws Exception {
		ModelAndView mv = new ModelAndView();

		String key = emailAuthKey;

		CUDService.sendEmail(email, key);

		return mv;
	}
	
	@GetMapping("/emailconfirmed")
	public ResponseEntity<?> reciveEmail(@RequestParam("userEmail") String userEmail, @RequestParam("authKey") String authKey) throws Exception {
		HttpHeaders headers = new HttpHeaders();
		if (!tempMailRepository.existsByEmail(userEmail)) {
				headers.setLocation(URI.create("http://localhost:3000/register/expired"));
				return new ResponseEntity<>(headers, HttpStatus.MOVED_PERMANENTLY);
	        }
		
		CUDService.mailAuth(userEmail, authKey); 
		
		Boolean result = CUDService.mailAuth(userEmail, authKey);
		
		if(result.equals(true)) {
			headers.setLocation(URI.create("http://localhost:3000/register/emailconfirmed"));
			return new ResponseEntity<>(headers, HttpStatus.MOVED_PERMANENTLY);
		}else {
			headers.setLocation(URI.create("http://localhost:3000/register/expired"));
			return new ResponseEntity<>(headers, HttpStatus.MOVED_PERMANENTLY);
		}
	}

}