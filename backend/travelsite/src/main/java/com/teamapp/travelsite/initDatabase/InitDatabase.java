package com.teamapp.travelsite.initDatabase;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.teamapp.travelsite.DTOs.AirportDTO;
import com.teamapp.travelsite.DTOs.CityDTO;
import com.teamapp.travelsite.DTOs.CountryDTO;
import com.teamapp.travelsite.Repository.AirportRepository;
import com.teamapp.travelsite.Repository.CityRepository;
import com.teamapp.travelsite.Repository.CountryRepository;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Component
public class InitDatabase implements ApplicationListener<ContextRefreshedEvent> {
    List<AirportDTO> airportsDTOs = new ArrayList<>();
    List<CityDTO> citiesDTOs = new ArrayList<>();
    List<CountryDTO> countryDTOS = new ArrayList<>();
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
        Gson gson = new Gson();
        Reader reader = Files.newBufferedReader(Paths.get("src/main/java/com/teamapp/travelsite/initDatabase/airports.json"));
        airportsDTOs = gson.fromJson(reader, new TypeToken<List<AirportDTO>>() {
        }.getType());
        Reader readers = Files.newBufferedReader(Paths.get("src/main/java/com/teamapp/travelsite/initDatabase/airports.json"));
        citiesDTOs = gson.fromJson(readers, new TypeToken<List<CityDTO>>() {
        }.getType());
        //Practice lambda & Functional
        //country
        for (String countryCode : locales) {
            Locale obj = new Locale("", countryCode);
            CountryDTO countryDTO = new CountryDTO(obj.getCountry(), obj.getDisplayCountry(Locale.ENGLISH), obj.getDisplayCountry(Locale.KOREAN));
            countryDTOS.add(countryDTO);
        }

        System.out.println("Country saving start");
        countryDTOS.forEach(e -> countries.add(e.toEntity()));
        countryRepository.saveAll(countries);
        System.out.println("city saving start");
        List<CityDTO> distincted = deduplication(citiesDTOs, CityDTO::getCity); //cause ORA-0001
        distincted.forEach(e -> setCountryMapping(e));
        distincted.forEach(e -> cityList.add(e.toEntity()));
        saveAllcity(cityList);
        System.out.println("airport saving start");
        List<AirportDTO> distinctedAirport = deleteNullObject(airportsDTOs, AirportDTO::getIata);
        distinctedAirport.forEach(e -> setAirportMapping(e));
        airportsDTOs.forEach(e -> airportList.add(e.toEntity()));
        saveAllairport(airportList);
    }
    //=============================================================================================================//

    //100 insert query per Transaction
    public void saveAllairport(List<Airport> list) {
        List<Airport> tmp = new ArrayList<>();
        list.forEach(i -> {
            tmp.add(i);
            if (tmp.size() == 100) {
                airportRepository.saveAll(tmp);
                tmp.clear();
            }
        });
    }
    public void saveAllcity(List<City> list) {
        List<City> tmp = new ArrayList<>();
        list.forEach(i -> {
            tmp.add(i);
            if (tmp.size() == 100) {
                cityRepository.saveAll(tmp);
                tmp.clear();
            }
        });
    }
    public <T> List<T> deduplication(List<T> list, Function<? super T, ?> key) {
        return list.stream()
                .filter(deduplication(key)) // List -> stream -> filter -> List
                .collect(Collectors.toList());
    }
    private <T> Predicate<T> deduplication(Function<? super T, ?> key) {
        final Set<Object> set = ConcurrentHashMap.newKeySet();
        return predicate -> set.add(key.apply(predicate));
    }
    public <T> List<T> deleteNullObject(List<T> list, Function<? super T, ?> key) {
        return list.stream()
                .filter(deleteNullObject(key))
                .collect(Collectors.toList());
    }
    private <T> Predicate<T> deleteNullObject(Function<? super T, ?> key) {
        Set<Object> sets = ConcurrentHashMap.newKeySet();
        Iterator<Object> keys = sets.iterator();

        while (keys.hasNext()){
            if(keys.equals(null)){           //not yet
                sets.remove(keys);
            }
        }
        return predicate -> sets.add(key.apply(predicate));
    }

        //tempVariable from parsing Gson init Obj
    public void setCountryMapping(CityDTO cityDTO) {
        try {
            cityDTO.setCountrys(countryRepository.findById(cityDTO.getCountry()).get());
        } catch (NoSuchElementException noSuchElementException) {
        }
    }
    public void setAirportMapping(AirportDTO airportDTO) {
        try {
            airportDTO.setCityA(cityRepository.findByCityName(airportDTO.getCity()).get());
            airportDTO.setCountryA(countryRepository.findByCountryName(airportDTO.getCountry()).get());
        } catch (NoSuchElementException noSuchElementException){

        }
    }
}
/* cf. Bulk Insert
	In short, Bulk insert is faster. You can use bulk insert to insert millions of rows from a csv or xml or other files
	in a very short time however if you only have 3 or 4 rows to insert it's quick enough to just
	throw it in using insert statements.
	 */