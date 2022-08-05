package com.teamapp.travelsite.initDatabase;

import javax.persistence.*;

import lombok.*;
import org.apache.ibatis.annotations.One;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

//@Entity

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Country {

	@Id
	@Column(nullable = false)
	private String country_code;
	@Column(nullable = false)
	private String country_name;


	@OneToMany(mappedBy = "country") //N:1 Bothside (JPA) In DB FK Owner :: N side
	List<City> cities;





	public Country(String country, String displayCountry) {
		this.country_name = displayCountry;
		this.country_code = country;
	} //Builder
}
