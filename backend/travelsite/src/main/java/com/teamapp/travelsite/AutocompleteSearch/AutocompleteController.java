package com.teamapp.travelsite.AutocompleteSearch;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.teamapp.travelsite.initDatabase.Airport;
import com.teamapp.travelsite.initDatabase.InitDatabaseService;

@RestController
public class AutocompleteController {
	
	@Autowired
	InitDatabaseService service;
	List<Airport> airports = new ArrayList<Airport>();
	
	@GetMapping("/search")
	public List<Airport> autocomplete(@RequestParam String str) {
		
		List<String> list = new ArrayList<>();
		list.add("a");
		list.add("b");
		
		return service.getAirports(str);
	}
}
