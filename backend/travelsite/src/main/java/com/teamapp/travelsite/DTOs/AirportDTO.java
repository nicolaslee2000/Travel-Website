package com.teamapp.travelsite.DTOs;

import com.google.gson.annotations.SerializedName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class AirportDTO {

    @SerializedName("iata")
    private String airport_iatacode;

    private String city_name;

    private String country_code;


}
