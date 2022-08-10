package com.teamapp.travelsite.Entity;

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
	@GeneratedValue
	@Column(nullable = false)
	private Long id;

	@SerializedName("iata")
	@Column(nullable = true,name = "airport_id")
	private String airport_iatacode;


	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
	@JoinColumn(name = "city_name",referencedColumnName = "city_name")
	private City city;

	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
	@JoinColumn(name = "country_name",referencedColumnName = "country_name")
	private Country country;
}
