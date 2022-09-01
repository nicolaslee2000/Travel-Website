package com.teamapp.travelsite.AutocompleteSearch;

import java.util.Arrays;

import com.amadeus.exceptions.ClientException;
import com.teamapp.travelsite.Exception.NotFoundExceptionMessage;
import com.teamapp.travelsite.Model.Repository.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.amadeus.resources.Location;
import com.teamapp.travelsite.Api.AmadeusConnect;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class AutocompleteController {
	
	private final AmadeusConnect amadeusConnect;
	
	@Autowired
	AirportRepository airportRepository;


	@GetMapping("/apisearch")
	public Location[] search(@RequestParam String str) {

		Location[] loc = new Location[10];




		try{
			loc = amadeusConnect.search(str);
		} catch (NullPointerException e) {
			//e.printStackTrace();
		}
			return loc;
	}
}
