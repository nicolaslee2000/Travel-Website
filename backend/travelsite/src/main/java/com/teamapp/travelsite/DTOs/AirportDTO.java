package com.teamapp.travelsite.DTOs;

import com.teamapp.travelsite.Entity.Airport;
import com.teamapp.travelsite.Entity.City;
import com.teamapp.travelsite.Entity.Country;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class AirportDTO {
    private String iata;

    private String city; //tempVariable for parsing Gson
    private City cityA;

    private String country; //tempVariable for parsing Gson
    private Country countryA;
    public Airport toEntity() {

        return Airport.builder()
                .airport_iatacode(this.iata)
                .city(cityA)
                .country(countryA)
                .build();
    }
}
