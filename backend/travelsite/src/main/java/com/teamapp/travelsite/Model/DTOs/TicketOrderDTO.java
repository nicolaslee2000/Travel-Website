package com.teamapp.travelsite.Model.DTOs;

import com.teamapp.travelsite.Model.Entity.TicketOrder;
import com.teamapp.travelsite.Model.Entity.Traveler;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;

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

    private TravelerDTO travelerDTO;

    private UserDTO userDTO;

    public TicketOrder toEntity(TicketOrderDTO ticketOrderDTO) {
    ModelMapper modelMapper = new ModelMapper();
    return modelMapper.map(ticketOrderDTO, TicketOrder.class);
    }

}
