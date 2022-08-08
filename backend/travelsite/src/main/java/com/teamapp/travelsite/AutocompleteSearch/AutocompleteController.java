package com.teamapp.travelsite.AutocompleteSearch;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.amadeus.resources.Location;
import com.teamapp.travelsite.Api.AmadeusConnect;
import com.teamapp.travelsite.initDatabase.Airport;

@RestController
public class AutocompleteController {
	
//	@Autowired
//	InitDatabaseService service;
//	List<Airport> airports = new ArrayList<Airport>();
//	
//	@GetMapping("/search")
//	public List<Airport> autocomplete(@RequestParam String str) {
//		
//
//		
//		return service.getAirports(str) ;
//	}
	
	@GetMapping("/apisearch")
	public Location[] search(@RequestParam String str) {
		
		return AmadeusConnect.INSTANCE.search(str);
	}
}
