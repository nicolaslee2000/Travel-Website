package com.teamapp.travelsite.initDatabase;

import javax.persistence.*;

import lombok.Builder;
import lombok.NoArgsConstructor;
import org.apache.ibatis.annotations.One;
import org.springframework.stereotype.Repository;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

//@Entity
@Data
@AllArgsConstructor
@Entity
@NoArgsConstructor
@Builder
public class Country {

	@Id
	@Column(nullable = false)
	private String country_code;
	@Column(nullable = false)
	private String country_name;


	@OneToMany(mappedBy = "country") //N:1 Bothside (JPA) In DB FK Owner :: N side
	List<City> cities;





	public Country(String country, String displayCountry) {
		this.setCountry_name(displayCountry);
		this.setCountry_code(country);
	} //Builder
}
