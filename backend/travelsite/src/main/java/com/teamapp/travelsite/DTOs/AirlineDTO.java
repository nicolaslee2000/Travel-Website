package com.teamapp.travelsite.DTOs;


import javax.validation.constraints.NotBlank;

import org.modelmapper.ModelMapper;

import com.teamapp.travelsite.initDatabase.Airline;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class AirlineDTO {

    @NotBlank(message = "Warning : IATACode is Null")
    private String airline_iatacode;

    @NotBlank(message = "Warning : Airlinename is Null")
    private String airline_name;




    // Entity -> DTO
    public static AirlineDTO of(Airline airline) {

        ModelMapper modelMapper = new ModelMapper();

        return modelMapper.map(airline, AirlineDTO.class); //map(Entity,DTO.class)
    }

    // DTO -> Entity

    public Airline toEntity(){
        return Airline.builder()
                .airline_iatacode(this.airline_iatacode)
                .airline_name(this.airline_name)
                .build();
    }

//    Entity -> DTO (Page의 경우) SampleCode
//    public static Page<SampleDto> of(Page<Sample> sourcePage) {
//            ModelMapper modelMapper = new ModelMapper();
//        return sourcePage.map(SampleDto::of);
//    }


}
