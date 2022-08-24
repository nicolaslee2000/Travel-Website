package com.teamapp.travelsite.Model.Entity;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "FRIENDLIST")
public class FriendList {
    @Id
    @Column(nullable = false)
    private User user;

    @Column(nullable = false)
    private User friend;


}
