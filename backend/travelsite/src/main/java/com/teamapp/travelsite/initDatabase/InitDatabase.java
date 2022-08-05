package com.teamapp.travelsite.initDatabase;

import com.teamapp.travelsite.Repository.AirportRepository;
import com.teamapp.travelsite.Repository.CityRepository;
import com.teamapp.travelsite.Repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;

import java.util.ArrayList;
import java.util.List;

public class InitDatabase implements ApplicationListener<ContextRefreshedEvent> {
    @Autowired
    AirportRepository airportRepository;
    @Autowired
    CityRepository cityRepository;
    @Autowired
    CountryRepository countryRepository;




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

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {

        //// save to repo
        citiesDTOs.forEach(e -> cityList.add(e.toEntity()));
        saveAllcity(cityList);
        //city first because cascade
        airportsDTOs.forEach(e -> airportList.add(e.toEntity()));
        saveAllairport(airportList);

    }
}
/* cf. Bulk Insert
	In short, Bulk insert is faster. You can use bulk insert to insert millions of rows from a csv or xml or other files
	in a very short time however if you only have 3 or 4 rows to insert it's quick enough to just
	throw it in using insert statements.
	 */