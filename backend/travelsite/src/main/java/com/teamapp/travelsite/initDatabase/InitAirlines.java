package com.teamapp.travelsite.initDatabase;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import com.teamapp.travelsite.DTOs.AirlineDTO;
import com.teamapp.travelsite.Repository.AirlineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import com.amadeus.Amadeus;
import com.amadeus.exceptions.ResponseException;

@Component
public class InitAirlines implements ApplicationListener<ContextRefreshedEvent> {
	
	List<Airline> airlineEntity = new ArrayList<>(); //Entity
	List<AirlineDTO> airlineDTOS = new ArrayList<>();

	@Autowired
	AirlineRepository airlineRepository;

	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		final Amadeus amadeus = Amadeus.builder("cSg0o4RSb1xXoEUYShvvb2JOJC7DxqQq","yFFOhZt1nuAS2cDS").build();
		try {
			airlineDTOS = Arrays.stream(amadeus.referenceData.airlines.get()).map(
					e -> new AirlineDTO(e.getIataCode(), e.getCommonName())).collect(Collectors.toList());

			
			int i = 0;
			for(AirlineDTO airline : airlineDTOS) {
				String uri = "https://daisycon.io/images/airline/?width=300&height=150&color=ffffff&iata="+airline.getAirline_iatacode();
				HttpRequest request = HttpRequest.newBuilder(new URI(uri)).GET()
						.header("Accept", "*/*")
						.build();
						
				HttpResponse<byte[]> response = HttpClient.newHttpClient().send(request, BodyHandlers.ofByteArray());
				airline.setAirline_logo(response.body());	
				i++;

				
				
				if(i>10){
					break;
				}
			}
			
			
			
		} catch (ResponseException | URISyntaxException | IOException | InterruptedException e) {
			e.printStackTrace();
		}
		/////////save to repo
		/////////saveAll : for Stream, List, HashMap, etc..

//		airlines.forEach(System.out::println);

//		airlineDTOS.forEach(e -> airlineEntity.add(e.toEntity()));
//
//		saveAllWithDevideTest(airlineEntity);

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
