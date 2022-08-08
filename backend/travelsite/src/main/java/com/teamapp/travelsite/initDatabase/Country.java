package com.teamapp.travelsite.initDatabase;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;

import lombok.AllArgsConstructor;
import lombok.Data;

//@Entity
@Data
@AllArgsConstructor
@Entity
@NoArgsConstructor
@Table(name="countries")
public class Country {

	@Id
	@GeneratedValue
	private Long Coun_idx;

	@Column(nullable = false, name="country_code")
	private String country_code;
	@Column(nullable = false, name="country_name")
	private String country_name;



}
