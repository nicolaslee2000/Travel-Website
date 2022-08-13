package com.teamapp.travelsite.Model.DTOs;

import com.teamapp.travelsite.Model.Entity.TicketOrder;
import com.teamapp.travelsite.Model.Entity.Traveler;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TicketOrderDTO {
    private String depart; //MakeShift IATA please
    private String arrive;
    private Date arrivalDate;
    private Date departureDate;

    private Traveler traveler;

    private TicketOrder toEntity() {
        return TicketOrder.builder()
                .depart(this.depart)
                .arrive(this.arrive)
                .departureDate(this.departureDate)
                .arrivalDate(this.arrivalDate)
                .build();
    }
}
