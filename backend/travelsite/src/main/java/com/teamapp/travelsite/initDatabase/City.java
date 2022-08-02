package com.teamapp.travelsite.initDatabase;

import javax.persistence.Entity;

import com.google.gson.annotations.SerializedName;

import lombok.AllArgsConstructor;
import lombok.Data;

//@Entity
@Data
@AllArgsConstructor
public class City {
	@SerializedName("city")
	private String city_name;
	@SerializedName("country")
	private String country_code;
	
}
