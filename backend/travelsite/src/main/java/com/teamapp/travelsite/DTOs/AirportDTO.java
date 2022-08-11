package com.teamapp.travelsite.DTOs;

import com.google.gson.annotations.SerializedName;
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
    @SerializedName("name")
    private String airportName;
    private City cityA;
    private Country countryA;

    private String city; //tempVariable for parsing Gson
    private String country; //tempVariable for parsing Gson
    public Airport toEntity() {
        return Airport.builder()
                .airportName(this.airportName)
                .airportIatacode(this.iata)
                .city(cityA)
                .country(countryA)
                .build();
    }
}
