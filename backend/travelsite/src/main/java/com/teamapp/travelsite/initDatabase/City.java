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
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Table(name = "CITY")
public class City{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private int c_idx;

	@SerializedName("city")
	@Column(nullable = true,name = "city_name")
	private String city_name;

	@Column(nullable = true,insertable = false,updatable = false)
	private String country_code;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "country_code",referencedColumnName = "country_code")
	private Country country;

	@OneToMany(mappedBy = "city",cascade = CascadeType.ALL)
	private List<Airport> airport = new ArrayList<>();


}
