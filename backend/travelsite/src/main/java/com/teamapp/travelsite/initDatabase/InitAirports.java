package com.teamapp.travelsite.initDatabase;

import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import com.amadeus.resources.TripDetail;
import com.teamapp.travelsite.DTOs.AirportDTO;
import com.teamapp.travelsite.DTOs.CityDTO;
import com.teamapp.travelsite.Repository.AirportRepository;
import com.teamapp.travelsite.Repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

@Component
public class InitAirports implements ApplicationListener<ContextRefreshedEvent> {
	
	List<AirportDTO> airportsDTOs = new ArrayList<>();
	List<CityDTO> citiesDTOs = new ArrayList<>();

	List<Airport> airportList = new ArrayList<>();
	List<City> cityList = new ArrayList<>();

	@Autowired
	AirportRepository airportRepository;
	@Autowired
	CityRepository cityRepository;

	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		Gson gson = new Gson();

		try(Reader reader = Files.newBufferedReader(Paths.get("src/main/java/com/teamapp/travelsite/initDatabase/airports.json"))){
			airportsDTOs = gson.fromJson(reader, new TypeToken<List<AirportDTO>>() {}.getType());
			//airports.forEach(System.out::println);
			citiesDTOs = gson.fromJson(reader, new TypeToken<List<City>> () {}.getType());
			//System.out.println(airports.size());

		} catch (IOException e) {
			e.printStackTrace();
		}

	}


	
}
