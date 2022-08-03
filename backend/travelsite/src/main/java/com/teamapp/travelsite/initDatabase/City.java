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
public class City {
	@Id
	@GeneratedValue
	private int C_idx;

	@SerializedName("city")
	@Column(nullable = false,name = "city")
	private String city_name;
	@SerializedName("country")
	@Column(nullable = false,name = "country")
	private String country_code;
	
}
