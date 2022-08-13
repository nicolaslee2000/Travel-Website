package com.teamapp.travelsite.Model.Entity;

import javax.persistence.*;

import com.google.gson.annotations.SerializedName;

import lombok.*;

import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Table(name = "CITY")
public class City{

	@Id
	@SerializedName("city")
	@Column(name = "city_name",nullable = true)
	private String cityName;

	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE) //영속성 컨텍스트에 중복 주소값 병합
	@JoinColumn(name = "country_name",referencedColumnName = "country_name")
	private Country country;

	@OneToMany(mappedBy = "city",cascade = CascadeType.MERGE)
	private List<Airport> airport;
}
