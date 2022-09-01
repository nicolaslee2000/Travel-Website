package com.teamapp.travelsite.Model.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.teamapp.travelsite.Model.DTOs.ChatMessageDTO;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicUpdate;
import org.modelmapper.ModelMapper;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Getter
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "GROUPCHATMSG")
@Builder
@DynamicUpdate
public class GroupChatMsg {

    @Id
    @GeneratedValue //change SEQ yet
    private Long messageNumber;


    private String content;

    private Timestamp sendDate;

    @ManyToOne
    @JoinColumn(name = "sender")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "group_chat_no")
    private GroupChatRoom groupChatRoom;


    public GroupChatMsg of(ChatMessageDTO chatMessageDTO) {
        ModelMapper modelMapper =  new ModelMapper();
        return modelMapper.map(chatMessageDTO, GroupChatMsg.class);
    }



}
