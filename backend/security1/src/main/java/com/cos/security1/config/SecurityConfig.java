package com.cos.security1.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.cos.security1.oauth.PrincipalOauth2UserService;

@Configuration	//메모리에 뜬다는데 그게 먼말일까
@EnableWebSecurity	//스프링 시큐리티 필터가 스프링 필터체인에 등록이 됨
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)	//securedEnabled = true : secured 어노테이션 활성화	//@Secured를 통해 특정 메소드만 권한 제한 설정 가능
																			//prePostEnabled = true : preAuthorize, postAuthorize 어노테이션 활성화
public class SecurityConfig extends WebSecurityConfigurerAdapter{

	@Autowired
	private PrincipalOauth2UserService PrincipalDetailsService;
	
	//해당 메서드의 리턴되는 오브젝트를 IoC로 등록해준다
	@Bean
	public BCryptPasswordEncoder encodePwd() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();	//csrf 비활성화
		http.authorizeRequests()
			.antMatchers("/user/**").authenticated()	//이런 주소로 들어오면 인증이 필요	//인증만 되면 들어갈 수 있는 주소
			.antMatchers("/manager/**").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_MANAGER')")
			.antMatchers("/admin/**").access("hasRole('ROLE_ADMIN')")
			.anyRequest().permitAll()
			.and()			//여기서부터 권한이 없는 사람이 접속 시도하면 로그인 페이지가 뜨도록 하는 설정
			.formLogin()	//권한없이 /user, /manager같은 페이지 접속 시도 -> /login 페이지로 연결
			.loginPage("/loginForm")
//			.usernameParameter("\"username2\"")	loginForm에서 username을 username말고 다른걸로 바꾸려면 이런식으로 변경해야함. 그렇지 않으면 인식 오류 발생
			.loginProcessingUrl("/login")	//login주소가 호출이 되면 시큐리티가 낚아채서 대신 로그인을 진행해줍니다.
			.defaultSuccessUrl("/")	//메인페이지로
			//아래부터는 구글로그인
			//구글 로그인 완료된 뒤 후처리가 필요함. 1.코드받기(인증), 2.액세스토큰(권한), 3.사용자 프로필 정보 가져오기, 4.정보 바탕으로 회원가입 진행, 혹은 추가적인 정보가 필요할 경우 추가 가입정보 요청
			//but 구글 로그인은 토큰+사용자프로필정보를 한번에 받음 
			.and()
			.oauth2Login()
			.loginPage("/loginForm")
			.userInfoEndpoint()
			.userService(PrincipalDetailsService);
		
	}
}
