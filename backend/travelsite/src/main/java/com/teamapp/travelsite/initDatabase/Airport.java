package com.teamapp.travelsite.initDatabase;

import javax.persistence.*;

import com.google.gson.annotations.SerializedName;

import lombok.*;


@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Table(name = "AIRPORT")
public class Airport {

	@Id
	@SerializedName("iata")
	@Column(nullable = true,name = "airport_id")
	private String airport_iatacode;

//	@ManyToOne
//	@JoinColumn(name = "city_name",referencedColumnName = "city_name")
//	private City city;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "country_code",referencedColumnName = "country_code")
	private Country country;


}
