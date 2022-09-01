package com.teamapp.travelsite.Service.impl;

import com.teamapp.travelsite.Model.DTOs.GroupBoardDTO;
import com.teamapp.travelsite.Service.GroupChatAndBoardService;

import java.util.List;

public class GroupChatAndBoardServiceImpl implements GroupChatAndBoardService {
    @Override
    public Long createGroupBoard(GroupBoardDTO GroupBoardDTO) {
        return null;
    }

    @Override
    public boolean isOrderSaved(Long orderId) throws Exception {
        return false;
    }

    @Override
    public Long saveUpdatedOrder(GroupBoardDTO GroupBoardDTO) throws Exception {
        return null;
    }

    @Override
    public boolean deleteOrder(Long id) throws Exception {
        return false;
    }

    @Override
    public List<GroupBoardDTO> findGroupBoardByUserId(Long id) {
        return null;
    }
}
