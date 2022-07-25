package com.teamapp.travelsite.User;


import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@Builder
@ToString
@AllArgsConstructor
@Entity(name = "USER")
@Setter
@Table(name = "USER")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "m_idx")
    private String m_idx;

    @Column(nullable = false)
    private String id;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String createDate; //Timestamp
}