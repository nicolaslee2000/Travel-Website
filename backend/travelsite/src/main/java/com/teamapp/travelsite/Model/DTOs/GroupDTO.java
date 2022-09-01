package com.teamapp.travelsite.Model.DTOs;

import com.teamapp.travelsite.Model.Entity.Group;
import lombok.*;
import org.modelmapper.ModelMapper;

import javax.persistence.*;
import java.sql.Timestamp;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GroupDTO {

    private String groupName;

    @Column(insertable = false, updatable = false)
    private String groupMembers; //fk target, if you search username please JOIN by this.

    private String groupDescribe;

    private Timestamp creationDate;

    private GroupBoardDTO groupBoardDTO;

    private GroupChatRoomDTO groupChatRoomDTO;

    public Group toEntity(GroupDTO groupDTO) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(groupDTO, Group.class);
    }
}
