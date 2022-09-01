package com.teamapp.travelsite.Service.impl;

import com.teamapp.travelsite.Model.DTOs.DirectMessageDTO;
import com.teamapp.travelsite.Service.DirectMessageService;

import java.util.List;

public class DirectMessageServiceImpl implements DirectMessageService {


    @Override
    public Long createDirectMessage(DirectMessageDTO DirectMessageDTO) {
        return null;
    }

    @Override
    public boolean isOrderSaved(Long orderId) throws Exception {
        return false;
    }

    @Override
    public Long saveUpdatedOrder(DirectMessageDTO DirectMessageDTO) throws Exception {
        return null;
    }

    @Override
    public boolean deleteOrder(Long id) throws Exception {
        return false;
    }

    @Override
    public List<DirectMessageDTO> findDirectMessageByUserId(Long id) {
        return null;
    }
}
