package com.teamapp.travelsite.amadeus.controllers;

import java.util.Arrays;

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

public class ApiController {

	@GetMapping("/")
	public String hello() {
		return "hello world";
	}

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
    public FlightOfferSearch[] flights(@RequestParam(required=true) String origin,
                          @RequestParam(required=true) String destination,
                          @RequestParam(required=true) String departDate,
                          @RequestParam(required=true) String adults,
                          @RequestParam(required = false) String returnDate)
                          throws ResponseException {
        return AmadeusConnect.INSTANCE.flights(origin, destination, departDate, adults, returnDate);
    }
}
