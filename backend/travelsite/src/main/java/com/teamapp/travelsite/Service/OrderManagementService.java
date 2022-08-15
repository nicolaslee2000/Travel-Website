package com.teamapp.travelsite.Service;


import com.teamapp.travelsite.Model.DTOs.TicketOrderDTO;
import com.teamapp.travelsite.Model.DTOs.TravelerDTO;
import com.teamapp.travelsite.Model.Entity.TicketOrder;

import java.util.List;

public interface OrderManagementService {
    boolean createTicketOrder (TicketOrderDTO ticketOrderDTO);

    boolean isOrderSaved(Long orderId) throws Exception;

    void saveUpdatedOrder(TicketOrderDTO ticketOrderDTO) throws Exception;

    boolean deleteOrder(Long id) throws Exception;

    List<TicketOrderDTO> findTicketOrderByUserId (Long id);



}
