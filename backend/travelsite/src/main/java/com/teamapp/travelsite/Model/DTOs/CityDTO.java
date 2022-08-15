package com.teamapp.travelsite.Model.DTOs;


import com.teamapp.travelsite.Model.Entity.City;
import com.teamapp.travelsite.Model.Entity.Country;
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
