package com.teamapp.travelsite.OrderManagement;

import com.teamapp.travelsite.DTOs.AirportDTO;
import com.teamapp.travelsite.DTOs.OrderDTO;
import com.teamapp.travelsite.Entity.Order;
import com.teamapp.travelsite.Repository.AirportRepository;
import com.teamapp.travelsite.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class OrdermanagementService {

    @Autowired
    OrderRepository orderRepository;
    @Autowired
    AirportRepository airportRepository;



    //프런트에서 줄게 IATA인지 AirportName인지 모르겠다. 현재 Entity Mapping : iata 해당 메서드는 Name

    public void setOrderMapping(OrderDTO orderDTO) {
        try {
            orderDTO.setDepartAirport(airportRepository.findByAirportName(orderDTO.getDepart()).get());
            orderDTO.setArriveAirport(airportRepository.findByAirportName(orderDTO.getArrive()).get());
        } catch (NoSuchElementException noSuchElementException){
            //DB에 없는 공항입니다. 리턴
        }
    }
    public String saveOrder(OrderDTO orderDTO){
        orderRepository.save(
                Order.builder()
                .depart(orderDTO.getDepartAirport())
                .arrive(orderDTO.getArriveAirport())
                .departureDate(orderDTO.getDepartureDate())
                .arrivalDate(orderDTO.getArrivalDate())
                .build()
        );
        //아직 handler 작성 안했음
        return null;
    }
}
