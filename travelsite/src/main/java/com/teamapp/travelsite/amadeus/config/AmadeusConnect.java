package com.teamapp.travelsite.amadeus.config;

import java.util.HashMap;
import java.util.Map;

import com.amadeus.Amadeus;
import com.amadeus.Params;
import com.amadeus.exceptions.ResponseException;
import com.amadeus.referenceData.Locations;
import com.amadeus.resources.FlightOfferSearch;
import com.amadeus.resources.FlightOrder;
import com.amadeus.resources.FlightPrice;
import com.amadeus.resources.HotelOffer;
import com.amadeus.resources.Location;
import com.google.gson.JsonObject;

public enum AmadeusConnect {
	INSTANCE;

	private Amadeus amadeus;

	private AmadeusConnect() {
		this.amadeus = Amadeus.builder("cSg0o4RSb1xXoEUYShvvb2JOJC7DxqQq", "yFFOhZt1nuAS2cDS").build();
	}

	public Location[] location(String keyword) throws ResponseException {
		return amadeus.referenceData.locations.get(Params.with("keyword", keyword).and("subType", Locations.AIRPORT));
	}

	public FlightOfferSearch[] flights(String origin, String destination, String departDate, String adults,
			String returnDate, String max) throws ResponseException {
		Params param = Params.with("originLocationCode", origin)	;
		Map<String, Object> parameters = new HashMap<>();
		parameters.put("destinationLocationCode", destination);
		parameters.put("departureDate", departDate);
		parameters.put("returnDate", returnDate);
		parameters.put("adults", adults);
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
	
	
	
	
	//hotel api endpoints
	
	public HotelOffer[] hotelList(String cityCode) throws ResponseException {
		
		return  amadeus.shopping.hotelOffers.get(Params
				  .with("cityCode", cityCode));
	}
	
	
}