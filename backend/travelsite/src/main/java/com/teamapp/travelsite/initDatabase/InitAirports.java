package com.teamapp.travelsite.initDatabase;

import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.service.ServiceRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

@Component
public class InitAirports implements ApplicationListener<ContextRefreshedEvent> {
	
	@Autowired
	InitDatabaseService initDatabaseService;
	
	List<Airport> airports = new ArrayList<>();
	List<City> cities = new ArrayList<>();
	
	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		Gson gson = new Gson();
		try(Reader reader = Files.newBufferedReader(Paths.get("src/main/java/com/teamapp/travelsite/initDatabase/airports.json"))){
			airports = gson.fromJson(reader, new TypeToken<List<Airport>>() {}.getType());
//			airports.forEach(System.out::println);
			
//			System.out.println(airports.size());
			
		} catch (IOException e) {
			e.printStackTrace();
		} 
		try(Reader reader = Files.newBufferedReader(Paths.get("src/main/java/com/teamapp/travelsite/initDatabase/airports.json"))){
//			airports.forEach(System.out::println);
			cities = gson.fromJson(reader, new TypeToken<List<City>> () {}.getType());
			
//			System.out.println(airports.size());
			
		} catch (IOException e) {
			e.printStackTrace();
		} 
//		initDatabaseService.saveAirports(airports.stream().filter(e -> !e.getAirport_iatacode().isBlank()||e.getAirport_iatacode()!=null)
//				.collect(Collectors.toList()));
		
		//TODO airports and cities to databases
		//cities, airports 
		initDatabaseService.saveAirport(new Airport(null, "ICN", "incheon international","incheon", "KR"));
		initDatabaseService.saveAirport(new Airport(null, "NYC", "new york","newYork", "KR"));
		initDatabaseService.saveAirport(new Airport(null, "FRA", "Frankfurt am main","frankfurt", "KR"));
		initDatabaseService.saveAirport(new Airport(null, "BKK", "Bangkok airport","bangkok", "KR"));
	}
	
//	private List<Airport> getAirports(List<Airport> a){
//		
//	}
	
}
