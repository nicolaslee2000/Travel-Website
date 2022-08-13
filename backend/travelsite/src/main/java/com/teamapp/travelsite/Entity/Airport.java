package com.teamapp.travelsite.Entity;

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
@Table(name = "AIRPORT")
public class Airport {
	@Id
	@GeneratedValue
	@Column(nullable = false)
	private Long id;

	@SerializedName("iata")
	@Column(nullable = false,name = "airport_iata")
	private String airportIatacode;

	@Column(name = "airport_name")
	private String airportName;

	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
	@JoinColumn(name = "city_name",referencedColumnName = "city_name")
	private City city;

	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
	@JoinColumn(name = "country_name",referencedColumnName = "country_name")
	private Country country;

	@OneToMany(mappedBy = "airport",fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	private List<TicketOrder> orders = new ArrayList<>();

//	@ManyToMany(cascade = CascadeType.ALL,mappedBy = "airport")
//	private List<Order> order;
//	@ManyToMany(cascade = CascadeType.ALL,mappedBy = "arrive")
//	private List<Order> arrive;
// key owner is OrderEntity

//	@OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
//	private Order order;
// maybe not need find order by Airport
}
