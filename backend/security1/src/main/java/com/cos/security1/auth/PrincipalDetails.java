package com.cos.security1.auth;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.cos.security1.model.Member;

//시큐리티가 /login 주소 요청이 오면 낚아채서 로그인을 진행시킨다.
//로그인 진행이 완료가 되면 시큐리티 session을 만들어줍니다.	(Security ContextHolder라는 key값으로 구분?)
//Security ContextHolder 안에 들어갈 수 있는 오브젝트타입 => Authentication 타입 객체
//Authentication 안에 User정보가 있어야 됨
//User 오브젝트 타입 => UserDetails 타입 객체
//Security Session => Authentication => UserDetails(PrincipalDetails)

//얘는 강제로 Service를 띄울 거기 때문에 PrincipalDetailsService와는 다르게 @Service 안함
public class PrincipalDetails implements UserDetails {

	private Member member;	//콤포지션
	
	public PrincipalDetails(Member member) {
		this.member = member;
	}
	
	//해당 member의 권한을 리턴하는 곳
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Collection<GrantedAuthority> collect = new ArrayList<>();	//member.getRole()은 String 타입이라 타입이 정해져 있는 여기서는 return값이 될 수 없어서 GrantedAuthority타입을 생성
		collect.add(new GrantedAuthority() {
			
			@Override
			public String getAuthority() {
				
				return member.getRole();		//여기서 member.getRole()로 String 타입을 리턴함
			}
		});
		return collect;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return member.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return member.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {	//계정 만료 여부
		// TODO Auto-generated method stub
		return true;	//만료 아닐경우 true
	}

	@Override
	public boolean isAccountNonLocked() {	//계정 잠김 여부
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {		//계정 비밀번호 안바꾼 기간 오래됐는지 여부
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {	//계정 활성화 여부
		// TODO Auto-generated method stub
		
		// 우리 사이트에서는 1년동안 회원이 로그인을 안하면 휴먼 계정으로 하기로 했다면
		// member에 private Timestamp loginDate; 를 추가해서 마지막 접속을 기록한다.
		// 현재시간 - 로그인시간 => 1년초과시 false 
		
		return true;
	}

}
