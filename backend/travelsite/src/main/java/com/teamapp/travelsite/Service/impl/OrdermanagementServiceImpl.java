package com.teamapp.travelsite.Service.impl;

import com.teamapp.travelsite.Exception.NotFoundExceptionMessage;
import com.teamapp.travelsite.Model.DTOs.TicketOrderDTO;
import com.teamapp.travelsite.Model.Entity.TicketOrder;
import com.teamapp.travelsite.Model.Entity.Traveler;
import com.teamapp.travelsite.Model.Repository.AirportRepository;
import com.teamapp.travelsite.Model.Repository.TicketOrderRepository;
import com.teamapp.travelsite.Model.Repository.TravelerRepository;
import com.teamapp.travelsite.Model.Repository.UserRepository;
import com.teamapp.travelsite.Service.OrderManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class OrdermanagementServiceImpl implements OrderManagementService {

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
    public Long createTicketOrder(TicketOrderDTO ticketOrderDTO) {
        TicketOrder ticketOrder = this.ticketOrderRepository.save(ticketOrderDTO.toEntity(ticketOrderDTO));
        return ticketOrder.getId();
    }

    public boolean isOrderSaved(Long orderId) throws Exception {
        Optional<TicketOrder> byId = this.ticketOrderRepository.findById(orderId);
        if (byId.isPresent()) {
            return true;
        } else {
            throw new NotFoundExceptionMessage("Order Not founded");
        }
    }

    @Override
    public Long saveUpdatedOrder(TicketOrderDTO ticketOrderDTO) throws Exception {
        TicketOrder ticketOrder = ticketOrderDTO.toEntity(ticketOrderDTO);
        Optional<TicketOrder> byId = this.ticketOrderRepository.findById(ticketOrder.getId());
        if (byId.isPresent()) {
            ticketOrderRepository.delete(byId.get());
            return this.ticketOrderRepository.save(ticketOrder).getId();
        } else throw new NotFoundExceptionMessage("maybe not created");


    }

    @Override
    public boolean deleteOrder(Long id) throws Exception {
        Optional<TicketOrder> byId = this.ticketOrderRepository.findById(id);
        if (byId.isPresent()) {
            this.ticketOrderRepository.delete(byId.get());
            return true;
        } else throw new NotFoundExceptionMessage("Cannot delete order!");
    }

    @Override
    public List<TicketOrderDTO> findTicketOrderByUserId(Long id) {
        List<TicketOrder> byUserId = this.ticketOrderRepository.findByUserId(id);

        if (!byUserId.isEmpty()) {
            List<TicketOrderDTO> ticketOrderDTOS = new ArrayList<>();
            byUserId.forEach(e -> ticketOrderDTOS.add(e.of(e)));
            return ticketOrderDTOS;
        } else throw new NotFoundExceptionMessage("not yet create orders??");
    }


}
