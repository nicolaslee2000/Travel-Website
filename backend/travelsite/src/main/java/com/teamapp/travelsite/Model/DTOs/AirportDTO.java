package com.teamapp.travelsite.Model.DTOs;

import com.google.gson.annotations.SerializedName;
import com.teamapp.travelsite.Model.Entity.Airport;
import com.teamapp.travelsite.Model.Entity.Country;
import com.teamapp.travelsite.Model.Entity.City;
import com.teamapp.travelsite.Model.Entity.Traveler;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;


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
                .airportIataCode(this.iata)
                .city(cityA)
                .country(countryA)
                .build();
    }
    public AirportDTO of(Airport airport) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(airport, AirportDTO.class); //map(Entity,DTO.class)
    }
}
