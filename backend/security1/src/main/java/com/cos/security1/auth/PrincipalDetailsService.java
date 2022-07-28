package com.cos.security1.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cos.security1.model.Member;
import com.cos.security1.repository.MemberRepository;

//시큐리티 설정에서 loginProcessingUrl("/login"); 을 로그인으로 걸어 놨기때문에
// /login 요청이 오면 자동으로 UserDetailsService 타입으로 IoC되어 있는 loadUserByUsername 함수가 실행
// 그때 username을 가져온다.

@Service	//IoC에 등록됨
public class PrincipalDetailsService implements UserDetailsService{

	@Autowired
	private MemberRepository memberRepository;
	
	//시큐리티 session <= Authentication타입 넣고 <= UserDetails타입 넣고
	// --> session(Authentication(UserDetails))
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		System.out.println("username:"+username);
		Member memberEntity = memberRepository.findByUsername(username);	//findByUsername는 기본적으로 제공하는 crud가 아니라서 생성 필요
		if(memberEntity != null) {	//user가 있으면 
			return new PrincipalDetails(memberEntity); //있으면 PrincipalDetails에 memberEntity를 넣어서 session으로 안으로 리턴	=> 로그인 완료
		}
		
		return null;	//없으면 null 리턴 
	}

}
