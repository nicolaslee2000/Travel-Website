package com.teamapp.travelsite.initDatabase;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class InitCountries implements ApplicationListener<ContextRefreshedEvent> {
	
	List<Country> countries = new ArrayList<Country>();
	
	@Autowired
	InitDatabaseService service;
	
	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		String[] locales = Locale.getISOCountries();

		for (String countryCode : locales) {

			Locale obj = new Locale("", countryCode);
//			System.out.println("Country Code = " + obj.getCountry() 
//				+ ", Country Name = " + obj.getDisplayCountry());
			
			//TODO map Country entity to database
			
//			System.out.println(new Country(o bj.getCountry(), obj.getDisplayCountry(Locale.KOREAN)));
			countries.add(new Country(null,obj.getCountry(), obj.getDisplayCountry(Locale.ENGLISH)));
		}
		service.saveCountries(countries);

	}
}
