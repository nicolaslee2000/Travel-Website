package com.teamapp.travelsite.Model.DTOs;

import com.teamapp.travelsite.Model.Entity.Member;
import lombok.*;
import org.modelmapper.ModelMapper;

import javax.persistence.Column;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MemberDTO {

    @Column(nullable = false)
    private String nickName;

    private GroupDTO groupDTO;

    private UserDTO userDTO;

    public Member toEntity(MemberDTO memberDTO) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(memberDTO, Member.class);
    }
}
