package com.teamapp.travelsite.Model.Entity.ForJoinTable;

import com.teamapp.travelsite.Model.Entity.Group;
import com.teamapp.travelsite.Model.Entity.User;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Table(name = "GROUP_MEMBER")
public class GroupWithMember implements Serializable {

    @Column(nullable = true)
    private boolean isMaster;

    //Group Master Flag Column

    //make for group administrate is for only Master

    @Id
    @ManyToOne
    @JoinColumn(name = "userId",referencedColumnName = "id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "groupId", referencedColumnName = "group_id")
    private Group group;
}
