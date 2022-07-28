package com.cos.security1.model;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Data;

@Entity
@Data	//getter setter
public class Member {	//오라클은 User로 하면 예약어 때문에 에러나니까 다른걸로하자

	@Id
	@SequenceGenerator(name = "SEQ1", sequenceName = "SEQ1", schema = "hr", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ1")
	private int id;
	private String username;
	private String password;
	private String email;
	private String role;	//ROLE_USER, ROLE_ADMIN
	
	//일반 회원과 소셜로그인 회원 구분하기 위해서 
	private String provider;
	private String providerId;
	
	//////////////
	@CreationTimestamp
	private Timestamp createDate;
	
}
