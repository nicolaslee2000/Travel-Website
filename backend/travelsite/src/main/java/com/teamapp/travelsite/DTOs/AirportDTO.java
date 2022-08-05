package com.teamapp.travelsite.DTOs;

import com.google.gson.annotations.SerializedName;
import com.teamapp.travelsite.initDatabase.Airport;
import com.teamapp.travelsite.initDatabase.City;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class AirportDTO {


    private String iata;

    private String city;

    private String country_code;
    public Airport toEntity() {
        return Airport.builder()
                .airport_iatacode(this.iata)
                .city(City.builder()
                        .country_code(this.country_code)
                        .city_name(this.city)
                        .build())
                .build();
    }
}
