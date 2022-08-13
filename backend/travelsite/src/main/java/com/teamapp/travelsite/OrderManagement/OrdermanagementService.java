package com.teamapp.travelsite.OrderManagement;

import com.teamapp.travelsite.Model.DTOs.TicketOrderDTO;
import com.teamapp.travelsite.Model.Entity.TicketOrder;
import com.teamapp.travelsite.Model.Repository.AirportRepository;
import com.teamapp.travelsite.Model.Repository.TicketOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class OrdermanagementService {

    @Autowired
    TicketOrderRepository orderRepository;
    @Autowired
    AirportRepository airportRepository;



    //프런트에서 줄게 IATA인지 AirportName인지 모르겠다. 현재 Entity Mapping : iata 해당 메서드는 Name

    public void setOrderMapping(TicketOrderDTO ticketOrderDTO) {
        try {
//            orderDTO.setDepartAirport(airportRepository.findByAirportName(orderDTO.getDepart()).get());
//            orderDTO.setArriveAirport(airportRepository.findByAirportName(orderDTO.getArrive()).get());
        } catch (NoSuchElementException noSuchElementException){
            //DB에 없는 공항입니다. 리턴
        }
    }
    public String saveOrder(TicketOrderDTO ticketOrderDTO){
        orderRepository.save(
                TicketOrder.builder()
//                .depart(orderDTO.getDepartAirport())
//                .arrive(orderDTO.getArriveAirport())
                .departureDate(ticketOrderDTO.getDepartureDate())
                .arrivalDate(ticketOrderDTO.getArrivalDate())
                .build()
        );
        //아직 handler 작성 안했음
        return null;
    }


}
