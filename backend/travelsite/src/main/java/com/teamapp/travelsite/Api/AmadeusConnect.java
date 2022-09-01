package com.teamapp.travelsite.Api;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import java.util.stream.Collectors;

import com.amadeus.exceptions.ClientException;
import com.teamapp.travelsite.Model.DTOs.AirlineDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.amadeus.Amadeus;
import com.amadeus.Params;
import com.amadeus.exceptions.ResponseException;
import com.amadeus.referenceData.Locations;
import com.amadeus.resources.FlightDestination;
import com.amadeus.resources.FlightOfferSearch;
import com.amadeus.resources.FlightOrder;
import com.amadeus.resources.FlightPrice;
import com.amadeus.resources.Location;
import com.google.gson.JsonObject;
import com.teamapp.travelsite.Config.AmadeusConfig;

@Component
public class AmadeusConnect {

	
	private Amadeus amadeus;
	
	private final AmadeusConfig amadeusConfig;
	@Autowired
	private AmadeusConnect(AmadeusConfig amadeusConfig) {
		this.amadeusConfig= amadeusConfig;
		this.amadeus = Amadeus.builder(amadeusConfig.getApiKey(), amadeusConfig.getApiSecret()).setHostname(amadeusConfig.getMode()).build();
	}

	public Location[] location(String keyword) throws ResponseException {
		return amadeus.referenceData.locations.get(Params.with("keyword", keyword).and("subType", Locations.AIRPORT));
	}

	public FlightOfferSearch[] flights(String origin, String destination, String departDate, String returnDate, String adults, String children, String infants, String travelClass, String includedAirlines, String excludedAirlines, String nonStop, String currency, String maxPrice, String max) throws ResponseException {
		Params param = Params.with("originLocationCode", origin)	;
		Map<String, Object> parameters = new HashMap<>();
		parameters.put("destinationLocationCode", destination);
		parameters.put("departureDate", departDate);
		parameters.put("returnDate", returnDate);
		parameters.put("adults", adults);
		parameters.put("children", children);
		parameters.put("infants", infants);
		parameters.put("travelClass", travelClass);
		parameters.put("includedAirlineCodes", includedAirlines);
		parameters.put("excludedAirlineCodes", excludedAirlines);
		parameters.put("nonStop", nonStop);
		parameters.put("currencyCode", currency);
		parameters.put("maxPrice", maxPrice);
		parameters.put("max", max);

		parameters.keySet().stream().filter(e -> parameters.get(e) != null).forEach(e -> {
			param.and(e, parameters.get(e));
		});

		return amadeus.shopping.flightOffersSearch.get(param);
	}

	public FlightPrice confirm(FlightOfferSearch offer) throws ResponseException {
		return amadeus.shopping.flightOffersSearch.pricing.post(offer);
	}

	public FlightOrder order(JsonObject order) throws ResponseException {
		return amadeus.booking.flightOrders.post(order);
	}
	
	public Location[] search(String str) {
		String[] subtype = {"AIRPORT", "CITY"};
		
		try {
			return amadeus.referenceData.locations.get(Params.with("subType", "AIRPORT").and("keyword", str));
		} catch (ClientException e) {
			//e.printStackTrace();
		} catch (ResponseException e) {
			//e.printStackTrace();
		}
		return null;
	}
	
	public FlightDestination[] flightInspire(String origin) {
		try {
			return amadeus.shopping.flightDestinations.get(Params.with("origin", origin));
		} catch (ResponseException e) {
			e.printStackTrace();
		}
		return null;
	}

	public List<AirlineDTO> airlineDatabaseInit() {
		List<AirlineDTO> airlineDTOs = new ArrayList<AirlineDTO>();
		try {
			airlineDTOs = Arrays.stream(amadeus.referenceData.airlines.get()).map(
					e -> new AirlineDTO(e.getIataCode(), e.getCommonName())).collect(Collectors.toList());

		} catch (ResponseException e) {
			e.printStackTrace();
		}
		return airlineDTOs;
	}


}