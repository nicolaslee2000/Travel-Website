package com.teamapp.travelsite.initDatabase;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;

import javax.annotation.PostConstruct;

import com.teamapp.travelsite.Repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class InitCountries implements ApplicationListener<ContextRefreshedEvent> {

	@Autowired
	CountryRepository countryRepository;
	List<Country> countries = new ArrayList<>();
	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		String[] locales = Locale.getISOCountries();



		for (String countryCode : locales) {

			Locale obj = new Locale("", countryCode);
//			System.out.println("Country Code = " + obj.getCountry() 
//				+ ", Country Name = " + obj.getDisplayCountry());
			

			Country country = new Country(obj.getCountry(), obj.getDisplayCountry());

			countries.add(country);
		}

		//countryRepository.saveAll(countries); //for Bulk INSERT
	}

	/* cf. Bulk Insert
	In short, Bulk insert is faster. You can use bulk insert to insert millions of rows from a csv or xml or other files
	in a very short time however if you only have 3 or 4 rows to insert it's quick enough to just
	throw it in using insert statements.
	 */
}
