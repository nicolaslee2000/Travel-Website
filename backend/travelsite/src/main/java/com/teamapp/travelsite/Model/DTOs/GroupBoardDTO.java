package com.teamapp.travelsite.Model.DTOs;

import com.teamapp.travelsite.Model.Entity.Comment;
import com.teamapp.travelsite.Model.Entity.Group;
import com.teamapp.travelsite.Model.Entity.GroupBoard;
import lombok.*;
import org.modelmapper.ModelMapper;
import org.springframework.ui.Model;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GroupBoardDTO {


    @Column(nullable = false)
    private String title;

    @Column(nullable = true)
    private String container;

    public GroupBoard toEntity(GroupBoardDTO groupBoardDTO) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(groupBoardDTO, GroupBoard.class);
    }

}
