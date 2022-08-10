package com.teamapp.travelsite.AutocompleteSearch;

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
		return amadeusConnect.search(str);
	}
}
