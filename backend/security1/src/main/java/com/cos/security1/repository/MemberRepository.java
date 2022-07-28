package com.cos.security1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cos.security1.model.Member;

//CRUD 함수를 JpaRepository가 들고 있음.
// @Repository라는 어노테이션이 없어도 IoC가 가능. JpaRepository를 상속했기 때문에
public interface MemberRepository extends JpaRepository<Member, Integer>{

	//findBy은 규칙 -> Username은 문법
	//select * from member where username=1?	< ?위치에 파라미터 username이 들어감
	public Member findByUsername(String username);	//Jpa Query methods
	
}
