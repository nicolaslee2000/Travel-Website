package com.teamapp.travelsite.initDatabase;

import javax.persistence.*;

import com.google.gson.annotations.SerializedName;

import lombok.*;


@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class Airport {

	@Id
	@Column(nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int master_idx;

	@SerializedName("iata")
	@Column(nullable = true,name = "airport_id")
	private String airport_iatacode;

	@ManyToOne(cascade = CascadeType.ALL)
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
