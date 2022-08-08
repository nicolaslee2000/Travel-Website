package com.teamapp.travelsite.initDatabase;

import java.util.Locale;

import javax.annotation.PostConstruct;

import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class InitCountries implements ApplicationListener<ContextRefreshedEvent> {
	
	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
//		String[] locales = Locale.getISOCountries();
//
//		for (String countryCode : locales) {
//
//			Locale obj = new Locale("", countryCode);
////			System.out.println("Country Code = " + obj.getCountry() 
////				+ ", Country Name = " + obj.getDisplayCountry());
//			
//			//TODO map Country entity to database
//			new Country(obj.getCountry(), obj.getDisplayCountry());
//		}

	}
}
