package com.teamapp.travelsite.initDatabase;

import javax.persistence.*;

import lombok.*;
import org.apache.ibatis.annotations.One;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;

//@Entity

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Table(name = "COUNTRY")
public class Country {

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(nullable = true)
	private String country_code;
	@Column(nullable = true)
	private String country_name;


	@OneToMany(mappedBy = "country") //N:1 Bothside (JPA) In DB FK Owner :: N side
	List<City> cities;

	//cascade 영속성 전파
	
	public Country(String country, String displayCountry) {
		this.country_name = displayCountry;
		this.country_code = country;
	} //Builder
}
