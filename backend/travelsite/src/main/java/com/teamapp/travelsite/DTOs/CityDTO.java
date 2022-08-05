package com.teamapp.travelsite.DTOs;


import com.teamapp.travelsite.initDatabase.City;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class CityDTO {

    private String city_name;

    private String country_code;

    public City toEntity(){
        return City.builder()
                .city_name(this.city_name)
                .country_code(this.country_code)
                .build();
    }
}
