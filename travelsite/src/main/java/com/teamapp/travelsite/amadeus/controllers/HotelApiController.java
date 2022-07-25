package com.teamapp.travelsite.amadeus.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.amadeus.exceptions.ResponseException;
import com.amadeus.resources.HotelOffer;
import com.teamapp.travelsite.amadeus.config.AmadeusConnect;

@RestController
@RequestMapping(value = "/hotel")
public class HotelApiController {
	@GetMapping("/list")
	public HotelOffer[] getHotelList(@RequestParam(required = true) String cityCode) throws ResponseException {
		System.out.println("something wrong");
		return AmadeusConnect.INSTANCE.hotelList(cityCode);

	}

}
