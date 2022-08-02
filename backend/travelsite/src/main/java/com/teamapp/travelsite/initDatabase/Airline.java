package com.teamapp.travelsite.initDatabase;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;

//@Entity
@Data
@AllArgsConstructor
public class Airline {
	private String airline_iatacode;
	private String airline_name;
	private byte[] airline_logo;
	public Airline(String airline_iatacode, String airline_name) {
		this.airline_iatacode = airline_iatacode;
		this.airline_name = airline_name;
	}
	
}
