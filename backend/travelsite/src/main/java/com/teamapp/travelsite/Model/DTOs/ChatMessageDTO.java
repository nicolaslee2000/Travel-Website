package com.teamapp.travelsite.Model.DTOs;

import com.teamapp.travelsite.Model.Entity.GroupChatMessage;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChatMessageDTO {

    private String userName;
    private String messageContainer;

    public GroupChatMessage toEntity(ChatMessageDTO chatMessageDTO) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(chatMessageDTO, GroupChatMessage.class);
    } //toEntity Test plz
}
