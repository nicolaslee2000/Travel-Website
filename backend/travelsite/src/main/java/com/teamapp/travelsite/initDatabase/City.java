package com.teamapp.travelsite.initDatabase;

import javax.persistence.*;

import com.google.gson.annotations.SerializedName;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

//@Entity
@Data
@AllArgsConstructor
@Entity
@NoArgsConstructor
public class City{

	@Id
	@SerializedName("city")
	@Column(nullable = false,name = "city_name")
	private String city_name;

	@Column(nullable = false,insertable = false,updatable = false)
	private String country_code;

	@ManyToOne
	@JoinColumn(name = "country_code",referencedColumnName = "country_code")
	private Country country;

	@OneToMany(mappedBy = "city")
	private List<Airport> airport = new ArrayList<>();

	public City(String str, String str1) {
		this.city_name = str;
		this.country_code = str1;
	}

	public City(String city_name, String country_code, String country) {
	}
}
