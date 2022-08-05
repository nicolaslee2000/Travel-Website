package com.teamapp.travelsite.DTOs;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;

@Data
public class CountryDTO {

    private String country_code;

    private String country_name;
}
