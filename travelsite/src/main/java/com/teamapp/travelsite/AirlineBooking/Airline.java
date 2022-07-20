package com.teamapp.travelsite.AirlineBooking;

import lombok.Data;

@Data //Data 어노테이션은 Getter Setter 포함입니다.
public class Airline {
    private String destination;
    private String starting;
    private String arrivalDate;
    private String departureDate;
    private String arrivalTime;
    private String departureTime;
}
//일단 date Time 나눠둠