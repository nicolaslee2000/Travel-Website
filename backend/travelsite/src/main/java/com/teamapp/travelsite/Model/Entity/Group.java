package com.teamapp.travelsite.Model.Entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

@Entity
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Builder
@Table(name = "GROUP")
public class Group implements Serializable {
    @Id
    @Column(name = "group_id")
    private Long groupId;

    private String groupName;

    @Column(insertable = false, updatable = false)
    private String groupMembers; //fk target, if you search username please JOIN by this.

    private String groupDescribe;

    private Timestamp creationDate;

    @OneToOne(mappedBy = "group", cascade = CascadeType.ALL)
    private GroupBoard groupBoard;

    @OneToOne(mappedBy = "group", cascade = CascadeType.ALL)
    private GroupChatRoom groupChatRoom;

    @OneToMany(mappedBy = "group", cascade = CascadeType.ALL)
    private List<Member> members;

    @OneToMany(mappedBy = "group", cascade = CascadeType.ALL)
    private List<GroupChatRoom> groupChatRooms;

}
