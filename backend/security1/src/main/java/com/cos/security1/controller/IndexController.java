package com.cos.security1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cos.security1.model.Member;
import com.cos.security1.repository.MemberRepository;

@Controller	//view를 리턴
public class IndexController {

	@Autowired
	private MemberRepository userRepository;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@GetMapping({"","/"})
	public String index() {
		//머스테치 기본폴더 src/main/resources/
		//뷰리졸버 설정:templates(prefix), .mustache(suffix)	//생략가능
		return "index";
	}
	
	@GetMapping("/user")
	public @ResponseBody String user() {
		return "user";
	}
	
	@GetMapping("/admin")
	public @ResponseBody String admin() {
		return "admin";
	}
	
	@GetMapping("/manager")
	public @ResponseBody String manager() {
		return "manager";
	}
	
	// 현재는 스프링 시큐리티가 해당 주소를 낚아 챔  -> SecurityConfig 파일 생성 후 안 낚아챔 : 우리가 원하는 페이지 지정 가능
	@GetMapping("/loginForm")
	public String loginForm() {
		return "loginForm";
	}
	
	@GetMapping("/joinForm")
	public String joinForm() {
		return "joinForm";
	}
	
	@PostMapping("/join")
	public @ResponseBody String join(Member member) {
		System.out.println(member);
		member.setRole("ROLE_USER");
		String rawPassword = member.getPassword();
		String encPassword = bCryptPasswordEncoder.encode(rawPassword);	//패스워드 암호화
		member.setPassword(encPassword);
		
		userRepository.save(member);	//회원가입은 되지만 , 비밀번호가 암호화가 안돼있어서 시큐리티 로그인할 수 없음, 그래서 위에 세줄로 암호화
		return "redirect:/loginForm";
	}
	
	@Secured("ROLE_ADMIN")	//특정 메소드에 간단하게 권한제한 걸 수 있음 // 특정 하나의 권한만 지정할때는 이게 편함
	@GetMapping("/info")
	public @ResponseBody String info() {
		return "개인정보";
	}
	
	@PreAuthorize("hasRole('ROLE_MANAGER') or hasRole('ROLE_ADMIN')")	//data 메소드가 실행되기 직전에 실행 됨 //동시에 여러 권한 지정 가능
	@GetMapping("/data")
	public @ResponseBody String data() {
		return "데이터정보";
	}
	
}
