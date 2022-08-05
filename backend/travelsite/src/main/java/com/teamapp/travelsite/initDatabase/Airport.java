package com.teamapp.travelsite.initDatabase;

import javax.persistence.*;

import com.google.gson.annotations.SerializedName;

import lombok.*;


@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Airport {

	@Id
	@SerializedName("iata")
	@Column(nullable = false,name = "airport_id")
	private String airport_iatacode;

	@ManyToOne
	@JoinColumns({
			@JoinColumn(name = "city_name",
					referencedColumnName = "city_name"
					),
			@JoinColumn(name = "country_code",
					referencedColumnName = "country_code"
					)
	})
	private City city;
}
