package com.teamapp.travelsite.DTOs;


import com.teamapp.travelsite.initDatabase.City;
import com.teamapp.travelsite.initDatabase.Country;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class CityDTO {

    private String city;

    private String country_code;

    public City toEntity(){
        return City.builder()
                .city_name(this.city)
                .build();
    }
}
