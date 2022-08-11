package com.teamapp.travelsite.DTOs;

import com.teamapp.travelsite.Entity.Airport;
import com.teamapp.travelsite.Entity.Order;
import com.teamapp.travelsite.Traveler.Traveler;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderDTO {
    private String depart; //MakeShift
    private String arrive;
    private Airport departAirport;
    private Airport arriveAirport;
    private Date arrivalDate;
    private Date departureDate;

    private Traveler traveler;

    private Order toEntity() {
        return Order.builder()
                .depart(departAirport)
                .arrive(arriveAirport)
                .departureDate(this.departureDate)
                .arrivalDate(this.arrivalDate)
                .build();
    }
}
