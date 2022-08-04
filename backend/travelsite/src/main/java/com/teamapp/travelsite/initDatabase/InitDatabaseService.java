package com.teamapp.travelsite.initDatabase;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teamapp.travelsite.Repository.AirportRepository;

@Service
public class InitDatabaseService {
	
	@Autowired
	private AirportRepository airportRepository;
	public void saveAirport(Airport airport) {
		airportRepository.save(airport);
	}
	
	public void saveAirports(List<Airport> airports) {
		airportRepository.saveAll(airports);
	}
	
}
