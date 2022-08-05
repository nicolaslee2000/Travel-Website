package com.teamapp.travelsite.initDatabase;

import javax.persistence.*;

import com.google.gson.annotations.SerializedName;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

//@Entity
@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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

}
