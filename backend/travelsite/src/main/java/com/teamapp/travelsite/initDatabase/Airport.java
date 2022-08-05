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
	
	@SerializedName("iata")
	@Column(nullable = false,name = "airport_iatacode")
	private String airport_iatacode;
	@SerializedName("name")
	@Column(nullable = false,name = "airport_name")
	private String airport_name;
	@SerializedName("city")
	@Column(nullable = false,name = "city_name")
	private String city_name;
	@Column(nullable = false,name = "country_code")
	@SerializedName("country")
	private String country_code;


}
