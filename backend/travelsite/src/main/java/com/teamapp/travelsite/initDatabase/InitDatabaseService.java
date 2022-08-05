package com.teamapp.travelsite.initDatabase;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.teamapp.travelsite.Repository.AirportRepository;

@Service
public class InitDatabaseService {
	
	@Autowired
	private AirportRepository airportRepository;
	List<Airport> airports = new ArrayList<Airport>();
	public void saveAirport(Airport airport) {
		airportRepository.save(airport);
	}
	
	public void saveAirports(List<Airport> airports) {
		airportRepository.saveAll(airports);
	}
	
	public List<Airport> getAirports(String str)  {
		Pageable firstThree = PageRequest.of(0, 3);
		airportRepository.findByAirport_iatacodeContainingIgnoreCase(str).stream().forEach(airports::add);
		airportRepository.findByAirport_nameContainingIgnoreCase(str).stream().forEach(airports::add);
		return airports;
	}
}
