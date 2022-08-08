package com.teamapp.travelsite.Api;

import java.util.HashMap;
import java.util.Map;

import com.amadeus.Amadeus;
import com.amadeus.Params;
import com.amadeus.exceptions.ResponseException;
import com.amadeus.referenceData.Locations;
import com.amadeus.resources.FlightOfferSearch;
import com.amadeus.resources.FlightOrder;
import com.amadeus.resources.FlightPrice;
import com.amadeus.resources.Location;
import com.google.gson.JsonObject;

public enum AmadeusConnect {
	INSTANCE;

	private Amadeus amadeus;

	private AmadeusConnect() {
		this.amadeus = Amadeus.builder("xSwPZ1hUSTFsfJIyE2Ojs4p43iNMxVXK", "UZan5LiC10JLDh8h").setHostname("production").build();
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
		} catch (ResponseException e) {
			e.printStackTrace();
		}
		return null;
	}


	
}