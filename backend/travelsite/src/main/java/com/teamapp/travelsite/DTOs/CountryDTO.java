package com.teamapp.travelsite.DTOs;

import com.teamapp.travelsite.initDatabase.Country;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@Builder
public class CountryDTO {

    private String country_code;

    private String country_name;

    private String country_name_kr;

    public Country toEntity(){
        return Country.builder()
                .country_code(this.country_code)
                .country_name(this.country_name)
                .country_name_kr(this.country_name_kr)
                .build();
    }
}
