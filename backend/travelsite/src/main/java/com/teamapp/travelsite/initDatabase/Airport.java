package com.teamapp.travelsite.initDatabase;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.google.gson.annotations.SerializedName;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//@Entity
@Data
@AllArgsConstructor
@Entity
@NoArgsConstructor
public class Airport {

	@Id
	@GeneratedValue
	private Long ap_idx;
	
//	@SerializedName("iata")
	@Column(nullable = false,name = "airport_iatacode")
	private String airportIatacode;
//	@SerializedName("name")
	@Column(nullable = false,name = "airport_name")
	private String airportName;
//	@SerializedName("city")
	@Column(nullable = false,name = "city_name")
	private String city_name;
	@Column(nullable = false,name = "country_code")
//	@SerializedName("country")
	private String country_code;
	
	@Column
	private String why;

	public Airport(Long ap_idx, String airport_iatacode, String airport_name, String city_name, String country_code) {
		super();
		this.ap_idx = ap_idx;
		this.airportIatacode = airport_iatacode;
		this.airportName = airport_name;
		this.city_name = city_name;
		this.country_code = country_code;
	}
	
	

}
