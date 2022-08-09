package com.teamapp.travelsite.initDatabase;

import javax.persistence.*;

import com.google.gson.annotations.SerializedName;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Table(name = "CITY")
public class City{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = true)
	private Long c_idx;


	@SerializedName("city")
	@Column(nullable = true)
	private String city_name;


	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JoinColumn(name = "country_code",referencedColumnName = "country_code")
	private Country country;

	@OneToMany(mappedBy = "city",cascade = CascadeType.ALL)
	private List<Airport> airport;
}
