package com.teamapp.travelsite.Model.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.teamapp.travelsite.Model.DTOs.ChatMessageDTO;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.modelmapper.ModelMapper;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "CHATMESSAGE")
@Builder
public class GroupChatMessage {
    @Id
    @GeneratedValue //change SEQ yet
    private Long MessageNumber;

    @Column(insertable = false,updatable = false)
    private String userName;

    private String messageContainer;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "YYYY-MM-DD")
    private Date sendDate;


    public GroupChatMessage of(ChatMessageDTO chatMessageDTO) {
        ModelMapper modelMapper =  new ModelMapper();
        return modelMapper.map(chatMessageDTO, GroupChatMessage.class);
    }

    @ManyToOne
    @JoinColumn(name = "userName",referencedColumnName = "email")
    User user;

}
