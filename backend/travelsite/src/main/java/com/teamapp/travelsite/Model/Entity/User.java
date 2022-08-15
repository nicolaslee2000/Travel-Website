package com.teamapp.travelsite.Model.Entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.teamapp.travelsite.User.Security.AuthProvider;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Builder
@ToString
@AllArgsConstructor
@Entity
@Setter
@Getter
@Table(name = "USER_TABLE",uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")
})
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    private String imageUrl;

    @Enumerated(EnumType.STRING)
    private AuthProvider provider;

    private String providerId;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    @Column(nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-mm-dd")
    private java.util.Date createDate; //Timestamp

    @OneToMany(mappedBy = "user")
    List<Traveler> traveler;

    @OneToMany(mappedBy = "user")
    List<TicketOrder> ticketOrders = new ArrayList<>(); //lombok @Builder 관련 경고 발생위치
}
/*
    (strategy=GenerationType.IDENTITY) IDENTITY = AUTO_INCREMENT
    SEQUENCE (ORACLE, PostgreSQL, DB2, H2) order by sequence file or table
    TABLE :: Like sequence however create key building table (able ALL DB)
    AUTO :: auto (DEFAULT)
* */