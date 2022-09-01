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
	
	private String airlineCode;
	private String departCityName;
	private String departCityIata;
	private String departTime;
	private String departDate;
	private String arrivalCityName;
	private String arrivalCityIata;
	private String arrivalTime;
	private String arrivalDate;
	private Boolean checkedBaggage;
	private String travelClass;
	private String terminal;
	private String price;
	private String userId;
	
	
	
	
//    private String depart; //MakeShift IATA please
//    private String arrive;
//    private Date arrivalDate;
//    private Date departureDate;

//    private TravelerDTO travelerDTO;

    private UserDTO userDTO;


//    public TicketOrder toEntity(TicketOrderDTO ticketOrderDTO) {
//        ModelMapper modelMapper = new ModelMapper();
//        return modelMapper.map(ticketOrderDTO, TicketOrder.class);
//    }
    public TicketOrder toEntity(TicketOrderDTO ticketOrderDTO) {
        return TicketOrder.builder().airlineCode(airlineCode).arrivalCityIata(arrivalCityIata).arrivalCityName(arrivalCityName).arrivalDate(arrivalDate)
        		.arrivalTime(arrivalTime).checkedBaggage(checkedBaggage).departCityIata(departCityIata).departCityName(departCityName).departDate(departDate)
        		.departTime(departTime).price(price).terminal(terminal).travelClass(travelClass).user(userDTO.toEntity(userDTO)).build();
    }
}
