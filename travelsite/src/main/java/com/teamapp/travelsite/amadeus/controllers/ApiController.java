package com.teamapp.travelsite.amadeus.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.amadeus.exceptions.ResponseException;
import com.amadeus.resources.FlightOfferSearch;
import com.amadeus.resources.FlightOrder;
import com.amadeus.resources.FlightPrice;
import com.amadeus.resources.Location;
import com.amadeus.resources.Traveler;
import com.google.gson.JsonObject;
import com.teamapp.travelsite.amadeus.config.AmadeusConnect;
import com.teamapp.travelsite.amadeus.database.DatabaseConnect;

@RestController
@RequestMapping(value = "/api")
//http://localhost:8090/api/locations?keyword=NYC
public class ApiController {


	@GetMapping("/locations")
	public Location[] locations(@RequestParam(required = true) String keyword) throws ResponseException {
		return AmadeusConnect.INSTANCE.location(keyword);

	}

	@PostMapping("/confirm")
	public FlightPrice confirm(@RequestBody(required = true) FlightOfferSearch search) throws ResponseException {
		return AmadeusConnect.INSTANCE.confirm(search);
	}

	@PostMapping("/traveler")
	public Traveler traveler(@RequestBody(required = true) JsonObject travelerInfo) {
		return DatabaseConnect.traveler(travelerInfo.get("data").getAsJsonObject());
	}

	@PostMapping("/order")
	public FlightOrder order(@RequestBody(required = true) JsonObject order) throws ResponseException {
		return AmadeusConnect.INSTANCE.order(order);
	}
	@GetMapping("/flights")
    public FlightOfferSearch[] flights(@RequestParam(required=true) String originLocationCode,
                          @RequestParam(required=true) String destinationLocationCode,
                          @RequestParam(required=true) String departureDate,
                          @RequestParam(required=true) String adults,
                          @RequestParam(required = false) String returnDate,
                          @RequestParam(required=false) String max)
                          throws ResponseException {
        return AmadeusConnect.INSTANCE.flights(originLocationCode, destinationLocationCode, departureDate, adults, returnDate, max);
    }
}
