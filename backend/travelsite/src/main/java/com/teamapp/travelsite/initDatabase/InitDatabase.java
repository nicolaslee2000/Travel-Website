package com.teamapp.travelsite.initDatabase;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.teamapp.travelsite.DTOs.AirportDTO;
import com.teamapp.travelsite.DTOs.CityDTO;
import com.teamapp.travelsite.Repository.AirportRepository;
import com.teamapp.travelsite.Repository.CityRepository;
import com.teamapp.travelsite.Repository.CountryRepository;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Component
public class InitDatabase implements ApplicationListener<ContextRefreshedEvent> {
    List<AirportDTO> airportsDTOs = new ArrayList<>();
    List<CityDTO> citiesDTOs = new ArrayList<>();

    List<Airport> airportList = new ArrayList<>();
    List<City> cityList = new ArrayList<>();
    List<Country> countries = new ArrayList<>();

    String[] locales = Locale.getISOCountries();
    @Autowired
    AirportRepository airportRepository;
    @Autowired
    CityRepository cityRepository;
    @Autowired
    CountryRepository countryRepository;
    @SneakyThrows
    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        //airport city
        Gson gson = new Gson();
        Reader reader = Files.newBufferedReader(Paths.get("src/main/java/com/teamapp/travelsite/initDatabase/airports.json"));
            airportsDTOs = gson.fromJson(reader, new TypeToken<List<AirportDTO>>() {}.getType());
            //airports.forEach(System.out::println);

        Reader readers = Files.newBufferedReader(Paths.get("src/main/java/com/teamapp/travelsite/initDatabase/airports.json"));
            citiesDTOs = gson.fromJson(readers, new TypeToken<List<CityDTO>> () {}.getType());
            //System.out.println(airports.size());


        //country


        for (String countryCode : locales) {
            Locale obj = new Locale("", countryCode);
//			System.out.println("Country Code = " + obj.getCountry()
//				+ ", Country Name = " + obj.getDisplayCountry());
            Country country = new Country(obj.getCountry(), obj.getDisplayCountry());
            countries.add(country);
        }

        System.out.println("Country saving start");
        countryRepository.saveAll(countries);
        //// save to repo
        System.out.println("city saving start");
       // System.out.println(citiesDTOs);
        citiesDTOs.forEach(e -> cityList.add(e.toEntity()));
        saveAllcity(cityList);
        //city first because cascade
        System.out.println("airport saving start");
        airportsDTOs.forEach(e -> airportList.add(e.toEntity()));
        saveAllairport(airportList);
    }

    public void saveAllairport(List<Airport> list){
        List<Airport> tmp = new ArrayList<>();
        list.forEach(i -> {
            tmp.add(i);
            if (tmp.size() == 100) {
                airportRepository.saveAll(tmp);
                tmp.clear();
            }
        });
    }
    public void saveAllcity(List<City> list){
        List<City> tmp = new ArrayList<>();
        list.forEach(i -> {
            tmp.add(i);
            if (tmp.size() == 100) {
                cityRepository.saveAll(tmp);
                tmp.clear();
            }
        });
    }
}
/* cf. Bulk Insert
	In short, Bulk insert is faster. You can use bulk insert to insert millions of rows from a csv or xml or other files
	in a very short time however if you only have 3 or 4 rows to insert it's quick enough to just
	throw it in using insert statements.
	 */