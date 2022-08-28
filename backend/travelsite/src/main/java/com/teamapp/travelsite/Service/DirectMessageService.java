package com.teamapp.travelsite.Service;


import com.teamapp.travelsite.Model.DTOs.DirectMessageDTO;

import java.util.List;

public interface DirectMessageService {
    Long createDirectMessage (DirectMessageDTO DirectMessageDTO);

    boolean isOrderSaved(Long orderId) throws Exception;

    Long saveUpdatedOrder(DirectMessageDTO DirectMessageDTO) throws Exception;

    boolean deleteOrder(Long id) throws Exception;

    List<DirectMessageDTO> findDirectMessageByUserId (Long id);



}
