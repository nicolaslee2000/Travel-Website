package com.teamapp.travelsite.User;


import com.teamapp.travelsite.Security.AuthProvider;
import com.teamapp.travelsite.Traveler.Traveler;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;

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
    private java.util.Date createDate; //Timestamp

    @OneToOne(mappedBy = "user")
    Traveler traveler;


}
/*
    (strategy=GenerationType.IDENTITY) IDENTITY = AUTO_INCREMENT
    SEQUENCE (ORACLE, PostgreSQL, DB2, H2) order by sequence file or table
    TABLE :: Like sequence however create key building table (able ALL DB)
    AUTO :: auto (DEFAULT)
* */