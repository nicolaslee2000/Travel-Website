package com.teamapp.travelsite.Service;


import com.teamapp.travelsite.Model.DTOs.TicketOrderDTO;

import java.util.List;

public interface OrderManagementService {
    boolean createTicketOrder ();

    TicketOrderDTO updateTicketOrder ();

    List<TicketOrderDTO> findOrderByUserId ();

    TicketOrderDTO findTicketOrderById ();

    boolean cancleOrder(int id);


}
