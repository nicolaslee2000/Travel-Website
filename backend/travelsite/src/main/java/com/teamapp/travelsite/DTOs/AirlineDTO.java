package com.teamapp.travelsite.DTOs;


import javax.validation.constraints.NotBlank;

import org.modelmapper.ModelMapper;

import com.teamapp.travelsite.Entity.Airline;

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




    // Entity -> DTO //대부분의 로직은 저장시에만 DTO 으로 건들고 꺼내오는건 리포지토리에서 엔티티를 바로 꺼내올거같은데. 과연 필요할까.
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
