package com.teamapp.travelsite.initDatabase;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import com.amadeus.Amadeus;
import com.amadeus.exceptions.ResponseException;
import com.teamapp.travelsite.Api.AmadeusConnect;
import com.teamapp.travelsite.DTOs.AirlineDTO;
import com.teamapp.travelsite.Repository.AirlineRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class InitAirlines implements ApplicationListener<ContextRefreshedEvent> {
	
	List<Airline> airlineEntity = new ArrayList<>(); //Entity
	List<AirlineDTO> airlineDTOs = new ArrayList<>();

	@Autowired
	AirlineRepository airlineRepository;
	
	private final AmadeusConnect amadeusConnect;
	
	
	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		airlineDTOs = amadeusConnect.airlineDatabaseInit();
		/////////save to repo
		/////////saveAll : for Stream, List, HashMap, etc..

//		airlines.forEach(System.out::println);

		airlineDTOs.forEach(e -> airlineEntity.add(e.toEntity()));

		saveAllWithDevideTest(airlineEntity);

	}
	public void saveAllWithDevideTest(List<Airline> list){
		List<Airline> tmp = new ArrayList<>();
		list.forEach(i -> {
			tmp.add(i);
			if (tmp.size() == 100) {
				airlineRepository.saveAll(tmp);
				tmp.clear();
			}
		});
	}

	
}
