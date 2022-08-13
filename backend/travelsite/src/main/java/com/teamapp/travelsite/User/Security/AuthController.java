package com.teamapp.travelsite.User.Security;

import com.teamapp.travelsite.Exception.BadRequestException;
import com.teamapp.travelsite.User.Security.OAuthPayload.SignUpRequest;
import com.teamapp.travelsite.Model.Repository.TempMailRepository;
import com.teamapp.travelsite.Model.Repository.UserRepository;
import com.teamapp.travelsite.User.Security.OAuthPayload.ApiResponse;
import com.teamapp.travelsite.User.Security.OAuthPayload.AuthResponse;
import com.teamapp.travelsite.User.Security.OAuthPayload.LoginRequest;
import com.teamapp.travelsite.User.Security.OAuthPayload.SignUpMailRequest;
import com.teamapp.travelsite.Model.Entity.TempMail;
import com.teamapp.travelsite.Model.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import javax.validation.Valid;
import java.net.URI;


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
        return ResponseEntity.ok(new AuthResponse(token));
    }


    @PostMapping("/emailAuth")
    public String registerMail(@Valid @RequestBody SignUpMailRequest signUpMailRequest) throws Exception {
        if (userRepository.existsByEmail(signUpMailRequest.getEmail())) {
            throw new BadRequestException("Email address already in use.");
        }

        TempMail tempMail = new TempMail();
        tempMail.setEmail(signUpMailRequest.getEmail());
        tempMail.setEmailAuth(false);
        tempMail.setEmailAuthKey(tokenProvider.creatEmailAuth());

        sendEmail((String) signUpMailRequest.getEmail(), tempMail.getEmailAuthKey());

        TempMail result = tempMailRepository.save(tempMail);
        System.out.println(tempMailRepository.searchEmailAuth(signUpMailRequest.getEmail()));


        return "redirect:/auth/AuthSuccess?userEmail=" + signUpMailRequest.getEmail(); 
        //대기페이지에서 메일 승인완료 누르면 가입창으로 

    }

    @GetMapping("/AuthSuccess")
    public Boolean authSuccess(@RequestParam("userEmail") String userEmail)throws Exception {

        if (!tempMailRepository.searchEmailAuth(userEmail).equals("1")){
            throw new BadRequestException("이메일 인증을 완료해주세요.");

        }
        System.out.println(tempMailRepository.searchEmailAuth(userEmail));
        System.out.println("userEmail");

        return true;
    }
	

	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
//			throws Exception {
//		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
//			throw new BadRequestException("Email address already in use.");
//		}
	
//		System.out.println(" dd");
//		String userEmail = null;
//		
//		Map<String, ?> flashMap =RequestContextUtils.getInputFlashMap(request);
//		  if(flashMap!=null) {
//	            
//	          userEmail =(String)flashMap.get("userEmail");
//	        }
      
		// Creating user's account
		User user = new User();
		
		user.setName(signUpRequest.getName());
		user.setEmail(signUpRequest.getEmail());
		user.setPassword(signUpRequest.getPassword());
		user.setProvider(AuthProvider.local);
		user.setPassword(passwordEncoder.encode(user.getPassword()));

		User result = userRepository.save(user);
		
		
		URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/user/me")
				.buildAndExpand(result.getId()).toUri();

		tempMailRepository.deleteTempMail(signUpRequest.getEmail());
		
		return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully@"));
	
	}

	// 메일 보내기
	// @Async
	// @RequestMapping("/sendMail")
	public ModelAndView sendEmail(String email, String emailAuthKey) throws Exception {
		ModelAndView mv = new ModelAndView();

		String key = emailAuthKey;

		CUDService.sendEmail(email, key);

//		mv.setViewName("/");
		return mv;
	}

	
	
	@GetMapping("/emailconfirmed")
	public @ResponseBody String reciveEmail(@RequestParam("userEmail") String userEmail, @RequestParam("authKey") String authKey) throws Exception {
		CUDService.mailAuth(userEmail, authKey);
	
	
		
		return "인증 완료 후에 페이지로 연결";
		// 페이지 고민중
	}

}