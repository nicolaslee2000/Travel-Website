package com.teamapp.travelsite.initDatabase;

import javax.persistence.Entity;

import org.springframework.stereotype.Repository;

import lombok.AllArgsConstructor;
import lombok.Data;

//@Entity
@Data
@AllArgsConstructor
public class Country {
	private String country_code; //2 char KR US
	private String country_name;
}
