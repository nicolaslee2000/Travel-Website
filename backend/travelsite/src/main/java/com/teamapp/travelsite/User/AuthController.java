package com.teamapp.travelsite.User;

import com.teamapp.travelsite.Exception.BadRequestException;
import com.teamapp.travelsite.Model.Entity.TempMail;
import com.teamapp.travelsite.Model.Entity.User;
import com.teamapp.travelsite.Model.Repository.TempMailRepository;
import com.teamapp.travelsite.Model.Repository.UserRepository;
import com.teamapp.travelsite.User.OAuthPayload.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.Random;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;
    
	@Autowired
	private TempMailRepository tempMailRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenProvider tokenProvider;
    
	@Autowired
	private CustomUserDetailsService CUDService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = tokenProvider.createToken(authentication);



        return ResponseEntity.ok(new AuthResponse(token,loginRequest.getEmail()));
    }
    
//    @GetMapping("/oauth2/redirect")
//    public String oauthLogin(@RequestParam("token") String token) {
//    	
//        Long userId = tokenProvider.getUserIdFromToken(token);
//        String email = CUDService.loadUserById(userId).getUsername();
//        System.out.println(email);
//        
//    	return email;
//    }


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
        tempMail.setEmailAuthKey(tokenProvider.creatEmailAuth());

        sendEmail((String) signUpMailRequest.getEmail(), tempMail.getEmailAuthKey());

        tempMailRepository.save(tempMail);

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
		
		return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully@"));
	
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