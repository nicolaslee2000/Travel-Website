package com.teamapp.travelsite.Model.Entity;

import com.teamapp.travelsite.Model.DTOs.TravelerDTO;
import com.teamapp.travelsite.User.Security.AuthProvider;
import lombok.*;
import org.modelmapper.ModelMapper;

import javax.persistence.*;
import java.util.Date;

@Getter
@Table(name = "TRAVELER")
@Entity
@Builder
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Traveler {

    @Id
    private Long id;
    private String Title;
    private Date dateOfBirth;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private String firstName;
    private String lastName;

    private  String documentType;
    private  String number;
    private  String expiryDate;
    private  String issuanceCountry;
    private  String nationality;


    @Column(name = "user_id",insertable = false, updatable = false)
    private String userId;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private User user;

    public TravelerDTO of(Traveler traveler) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(traveler, TravelerDTO.class); //map(Entity,DTO.class)
    }
}
