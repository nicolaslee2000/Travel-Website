package com.teamapp.travelsite.DTOs;


import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ByteArraySerializer;
import com.teamapp.travelsite.initDatabase.Airline;
import lombok.*;
import org.modelmapper.ModelMapper;

import javax.validation.constraints.NotBlank;


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

    @JsonSerialize(using= ByteArraySerializer.class)
    private byte[] airline_logo;

    public AirlineDTO(String iataCode, String commonName) {
        this.airline_iatacode = iataCode;
        this.airline_name = commonName;
    }

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
