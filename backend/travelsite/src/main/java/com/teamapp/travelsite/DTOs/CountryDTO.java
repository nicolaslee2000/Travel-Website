package com.teamapp.travelsite.DTOs;

import com.teamapp.travelsite.Entity.Country;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class CountryDTO {

    private String country_code;

    private String country_name;

    private String country_name_kr;


    public Country toEntity(){
        return Country.builder()
                .country_code(this.country_code)
                .countryName(this.country_name)
                .country_name_kr(this.country_name_kr)
                .build();
    }
}
