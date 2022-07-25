package com.teamapp.travelsite.AirlineBooking;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
@DynamicInsert
@Table(name = "Airline")
public class AirlineVO {

    @Id
    @GeneratedValue
    private int id;

    @Column(nullable = false)
    private String destination;

    @Column(nullable = false)
    private String starting;

    @Column(nullable = false)
    private String departureDate;

    @Column(nullable = false)
    private String departureTime;
}
