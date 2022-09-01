package com.teamapp.travelsite.Model.DTOs;

import com.teamapp.travelsite.Model.Entity.Comment;
import com.teamapp.travelsite.Model.Entity.GroupBoard;
import lombok.*;
import org.modelmapper.ModelMapper;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CommentDTO {

    private String comment;

    private GroupBoard groupBoard;

    public Comment toEntity(CommentDTO commentDTO) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(commentDTO,Comment.class);
    }
}
