package com.teamapp.travelsite.Model.DTOs;

import com.teamapp.travelsite.Model.Entity.User;
import com.teamapp.travelsite.User.AuthProvider;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

import org.modelmapper.ModelMapper;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private Long id;

    private String password;

    private String name;

    private Date createDate;
    
    private String email;

    private String imageUrl;


    private AuthProvider provider;

    private String providerId;

    public User toEntity(UserDTO userDTO) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(userDTO , User.class);
    }

}