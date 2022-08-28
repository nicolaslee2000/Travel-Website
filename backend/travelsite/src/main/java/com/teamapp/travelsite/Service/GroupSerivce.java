package com.teamapp.travelsite.Service;

import com.teamapp.travelsite.Model.DTOs.GroupDTO;

import java.util.List;

public interface GroupSerivce {
    Long createGroup (GroupDTO GroupDTO);

    boolean isOrderSaved(Long orderId) throws Exception;

    Long saveUpdatedOrder(GroupDTO GroupDTO) throws Exception;

    boolean deleteOrder(Long id) throws Exception;

    List<GroupDTO> findGroupByUserId (Long id);

}
