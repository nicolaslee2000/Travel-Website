package com.teamapp.travelsite.DTOs;

import com.google.gson.annotations.SerializedName;
import com.teamapp.travelsite.initDatabase.Airport;
import com.teamapp.travelsite.initDatabase.City;
import com.teamapp.travelsite.initDatabase.Country;
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
