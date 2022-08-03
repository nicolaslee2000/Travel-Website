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
	@Column(nullable = false,name = "iata")
	private String airport_iatacode;
	@SerializedName("city")
	@Column(nullable = false,name = "city")
	private String city_name;
	@Column(nullable = false,name = "country")
	@SerializedName("country")
	private String country_code;


}
