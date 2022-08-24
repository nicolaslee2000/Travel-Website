package com.teamapp.travelsite.Model.Entity;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "GROUP_BOARD")
public class GroupBoard {

    @Id
    @GeneratedValue
    @Column(name = "board_id")
    private Long boardId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = true)
    private String container;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "groupBoard")
    List<Comment> comments;

    @OneToOne
    Group group;

}
