package com.teamapp.travelsite.initDatabase;

import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

@Component
public class InitAirports implements ApplicationListener<ContextRefreshedEvent> {
	
	List<Airport> airports = new ArrayList<>();
	List<City> cities = new ArrayList<>();
	
	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		Gson gson = new Gson();

		try(Reader reader = Files.newBufferedReader(Paths.get("src/main/java/com/teamapp/travelsite/initDatabase/airports.json"))){
			airports = gson.fromJson(reader, new TypeToken<List<Airport>>() {}.getType());
//			airports.forEach(System.out::println);
			cities = gson.fromJson(reader, new TypeToken<List<City>> () {}.getType());
			
//			System.out.println(airports.size());
			
		} catch (IOException e) {
			e.printStackTrace();
		} 
		
		//TODO airports and cities to database
		//cities, airports 

	}

	
}
