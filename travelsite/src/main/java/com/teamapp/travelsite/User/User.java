package com.teamapp.travelsite.User;


import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@Builder
@ToString
@AllArgsConstructor
@Entity(name = "USER")
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String m_idx;

    @Column(nullable = false)
    private String id;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;
}