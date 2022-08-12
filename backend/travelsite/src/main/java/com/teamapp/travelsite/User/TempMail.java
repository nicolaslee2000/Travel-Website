package com.teamapp.travelsite.User;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Data;

@Data
@Entity
@Table(name = "TEMPMAIL_TABLE",uniqueConstraints = {
        @UniqueConstraint(columnNames = "EMAIL")
//        EMAIL 대문자 변경
})
public class TempMail {

	    @Id
	    @GeneratedValue
	    private Long id;

//      EMAIL 대문자 변경
	    @Column(name = "EMAIL" ,nullable = false)
	    private String email;


	    @Temporal(TemporalType.TIMESTAMP)
	    @CreationTimestamp
	    @Column(nullable = false)
	    private java.util.Date createDate; //Timestamp
	    
	  //메일 인증 여부
//      EMAIL 대문자 변경
	    @Column(name = "EMAILAUTH")
	  	private Boolean emailAuth;
	  	private String emailAuthKey; 


	}
	
