package com.teamapp.travelsite.DTOs;


import com.teamapp.travelsite.Repository.CountryRepository;
import com.teamapp.travelsite.initDatabase.City;
import com.teamapp.travelsite.initDatabase.Country;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CityDTO {

    private String city;

    private String country; //tempVariable for parsing Gson
    private Country countrys;

    public City toEntity(){
        return City.builder()
                .cityName(this.city)
                .country(countrys)
                .build();
    }
}
