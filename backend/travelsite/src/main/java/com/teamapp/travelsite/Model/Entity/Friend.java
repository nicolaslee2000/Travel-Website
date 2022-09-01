package com.teamapp.travelsite.Model.Entity;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "FRIEND")
public class Friend implements Serializable {

    @Id
    @Column(nullable = false)
    @GeneratedValue
    private Long dummy;

//    @Id
//    @ManyToOne
//    private User user;
//
//    @ManyToOne
//    private User friend;

} //make to friend to user too
