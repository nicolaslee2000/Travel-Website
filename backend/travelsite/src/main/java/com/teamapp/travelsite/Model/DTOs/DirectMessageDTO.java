package com.teamapp.travelsite.Model.DTOs;

import com.teamapp.travelsite.Model.Entity.DirectMessage;
import com.teamapp.travelsite.Model.Entity.User;
import lombok.*;
import org.modelmapper.ModelMapper;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.sql.Timestamp;
import java.util.Comparator;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class DirectMessageDTO implements Comparator<DirectMessageDTO> {

    private UserDTO creator; //Check is valid? if cause error view this.

    private UserDTO receiver;

    Timestamp writeTime;

    String content;

    @Override
    public int compare(DirectMessageDTO o1, DirectMessageDTO o2) {
        long l1 = o1.getWriteTime().getTime();
        long l2 = o2.getWriteTime().getTime();

        if(l1 > l2)
            return 1;
        else
            return -1;
    }

    public DirectMessage toEntity(DirectMessageDTO directMessageDTO) {
        ModelMapper  modelMapper = new ModelMapper();

        return modelMapper.map(directMessageDTO,DirectMessage.class);
    }
}
