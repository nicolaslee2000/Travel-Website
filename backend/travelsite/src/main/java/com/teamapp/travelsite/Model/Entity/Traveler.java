package com.teamapp.travelsite.Model.Entity;

import com.teamapp.travelsite.Model.DTOs.TravelerDTO;
import lombok.*;
import org.modelmapper.ModelMapper;

import javax.persistence.*;

@Getter
@Table(name = "TRAVELER")
@Entity
@Builder
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Traveler {

    @Id
    private String id;
    private String dateOfBirth;
    private String gender;
    private String firstName;
    private String lastName;

    private  String documentType;
    private  String number;
    private  String expiryDate;
    private  String issuanceCountry;
    private  String nationality;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
    @JoinColumn(name = "userId",referencedColumnName = "id")
    private User user;

    public TravelerDTO of(Traveler traveler) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(traveler, TravelerDTO.class); //map(Entity,DTO.class)
    }
}
