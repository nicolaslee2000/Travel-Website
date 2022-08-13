package com.teamapp.travelsite.Service.impl;

import com.teamapp.travelsite.Model.DTOs.TicketOrderDTO;
import com.teamapp.travelsite.Model.Repository.AirportRepository;
import com.teamapp.travelsite.Model.Repository.TicketOrderRepository;
import com.teamapp.travelsite.Model.Repository.TravelerRepository;
import com.teamapp.travelsite.Model.Repository.UserRepository;
import com.teamapp.travelsite.Service.OrderManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public
class OrdermanagementServiceImpl implements OrderManagementService {

    TicketOrderRepository ticketOrderRepository;
    AirportRepository airportRepository;
    TravelerRepository travelerRepository;
    UserRepository userRepository;
    @Autowired
    public OrdermanagementServiceImpl (TicketOrderRepository ticketOrderRepository
            , AirportRepository airportRepository, TravelerRepository travelerRepository
            , UserRepository userRepository) {
        this.userRepository = userRepository;
        this.travelerRepository = travelerRepository;
        this.ticketOrderRepository = ticketOrderRepository;
        this.airportRepository = airportRepository;
    }



    @Override
    public boolean createTicketOrder() {
        return false;
    }

    @Override
    public TicketOrderDTO updateTicketOrder() {
        return null;
    }

    @Override
    public List<TicketOrderDTO> findOrderByUserId() {
        return null;
    }

    @Override
    public TicketOrderDTO findTicketOrderById() {
        return null;
    }

    @Override
    public boolean cancleOrder(int id) {
        return false;
    }
}
