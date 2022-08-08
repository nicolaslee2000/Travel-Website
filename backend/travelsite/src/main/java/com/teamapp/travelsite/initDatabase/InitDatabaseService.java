package com.teamapp.travelsite.initDatabase;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.teamapp.travelsite.Repository.AirportRepository;
import com.teamapp.travelsite.Repository.CountryRepository;

@Service
public class InitDatabaseService {
	
	@Autowired
	private AirportRepository airportRepository;
	@Autowired
	private CountryRepository countryRepository;
	List<Airport> airports = new ArrayList<Airport>();
	public void saveAirport(Airport airport) {
		airportRepository.save(airport);
	}
	
	public void saveAirports(List<Airport> airports) {
		airportRepository.saveAll(airports);
	}
	
	public void saveCountry(Country country) {
		countryRepository.save(country);
	}
	
	public void saveCountries(List<Country> countries) {
		countryRepository.saveAll(countries);
	}
	
	public List<Airport> getAirports(String str)  {
		Pageable firstThree = PageRequest.of(0, 3);
		airports.clear();
		
		return airportRepository.findAllAirports(str.toUpperCase(), firstThree);
	}
}
