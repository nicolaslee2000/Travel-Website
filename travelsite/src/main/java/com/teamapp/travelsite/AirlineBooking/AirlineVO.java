package com.teamapp.travelsite.AirlineBooking;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Getter
@Entity
public class AirlineVO {
    @Id
    @GeneratedValue
    private int ID;
    @NonNull
    private String destination;
    private String starting;
    private String departureDate;
    private String departureTime;
}
//JPA 쓰는게 맞나. 싶다.