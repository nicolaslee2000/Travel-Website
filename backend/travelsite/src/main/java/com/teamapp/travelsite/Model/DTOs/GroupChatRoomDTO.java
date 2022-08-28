package com.teamapp.travelsite.Model.DTOs;

import com.teamapp.travelsite.Model.Entity.Group;
import com.teamapp.travelsite.Model.Entity.GroupChatRoom;
import org.modelmapper.ModelMapper;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

public class GroupChatRoomDTO {

    @Column(nullable = false)
    private String roomName;

    private GroupDTO groupDTO;

    public GroupChatRoom toEntity(GroupChatRoomDTO groupChatRoomDTO) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(groupChatRoomDTO, GroupChatRoom.class);
    }
}
