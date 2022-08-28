package com.teamapp.travelsite.Service;

import com.teamapp.travelsite.Model.DTOs.GroupBoardDTO;

import java.util.List;

public interface GroupChatAndBoardService {

    Long createGroupBoard (GroupBoardDTO GroupBoardDTO);

    boolean isOrderSaved(Long orderId) throws Exception;

    Long saveUpdatedOrder(GroupBoardDTO GroupBoardDTO) throws Exception;

    boolean deleteOrder(Long id) throws Exception;

    List<GroupBoardDTO> findGroupBoardByUserId (Long id);

}
