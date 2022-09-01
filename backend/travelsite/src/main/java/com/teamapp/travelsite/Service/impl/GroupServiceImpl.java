package com.teamapp.travelsite.Service.impl;

import com.teamapp.travelsite.Model.DTOs.GroupDTO;
import com.teamapp.travelsite.Service.GroupSerivce;

import java.util.List;

public class GroupServiceImpl implements GroupSerivce {
    @Override
    public Long createGroup(GroupDTO GroupDTO) {
        return null;
    }

    @Override
    public boolean isOrderSaved(Long orderId) throws Exception {
        return false;
    }

    @Override
    public Long saveUpdatedOrder(GroupDTO GroupDTO) throws Exception {
        return null;
    }

    @Override
    public boolean deleteOrder(Long id) throws Exception {
        return false;
    }

    @Override
    public List<GroupDTO> findGroupByUserId(Long id) {
        return null;
    }
}
