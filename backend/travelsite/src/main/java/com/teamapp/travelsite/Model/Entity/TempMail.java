package com.teamapp.travelsite.Model.Entity;

import javax.persistence.*;

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
	    @GeneratedValue(strategy = GenerationType.AUTO)
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

		@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
		User user;

	}
	
