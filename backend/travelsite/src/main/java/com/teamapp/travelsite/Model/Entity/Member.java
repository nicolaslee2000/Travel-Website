package com.teamapp.travelsite.Model.Entity;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Table(name = "MEMBER") //for Group Member profile Entity
public class Member {
    @Id
    @Column(nullable = false)
    @GeneratedValue
    private Long memberId;

    @Column(nullable = false)
    private String nickName;

    @ManyToOne
    @JoinColumn(name = "group_id")
    private Group group;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
