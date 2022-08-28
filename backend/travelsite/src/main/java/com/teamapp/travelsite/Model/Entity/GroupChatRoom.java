package com.teamapp.travelsite.Model.Entity;

import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Getter
@Table(name = "GROUP_CHATROOM")
public class GroupChatRoom {

    @Id
    @GeneratedValue
    private Long chatRoomId;

    @Column(nullable = false)
    private String roomName;

    @OneToOne
    private Group group;


}
