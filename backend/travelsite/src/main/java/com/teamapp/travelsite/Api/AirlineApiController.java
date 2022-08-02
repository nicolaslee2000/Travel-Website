package com.teamapp.travelsite.Api;

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
import com.amadeus.resources.Traveler;
import com.google.gson.JsonObject;


@RestController
@RequestMapping(value = "/flight")
//http://localhost:8090/flight/locations?keyword=NYC
public class AirlineApiController {

	
	
	@GetMapping("/flights")
    public FlightOfferSearch[] flights(@RequestParam(required=true) String origin,
                          @RequestParam(required=true) String destination,
                          @RequestParam(required=true) String departDate,
                          @RequestParam(required = false) String returnDate,
                          @RequestParam(required=true) String adults,
                          @RequestParam(required=false) String children,
                          @RequestParam(required=false) String infants,
                          @RequestParam(required=false) String travelClass,
                          @RequestParam(required=false) String includedAirlines,
                          @RequestParam(required=false) String excludedAirlines,
                          @RequestParam(required=false) String nonStop,
                          @RequestParam(required=false) String currency,
                          @RequestParam(required=false) String maxPrice,
                          @RequestParam(required=false) String max)
                          throws ResponseException {
        return AmadeusConnect.INSTANCE.flights(origin, destination, departDate, returnDate, adults, children, infants, travelClass, includedAirlines, excludedAirlines, nonStop, currency, maxPrice, max);
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

}
