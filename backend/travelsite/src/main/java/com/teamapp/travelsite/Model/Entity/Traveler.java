package com.teamapp.travelsite.Model.Entity;

import lombok.*;

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
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private User user;
}
