package com.teamapp.travelsite.User;


import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GeneratorType;

import javax.persistence.*;

@NoArgsConstructor
@Builder
@ToString
@AllArgsConstructor
@Entity
@Setter
@Table(name = "USER_TABLE")
public class User {

    @Id //Index Column
    @GeneratedValue //why we uses hibernate
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
    private String regType;
    //L = local, G = Google, K = Kakao

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    @Column(nullable = false)
    private java.util.Date createDate; //Timestamp
}
/*
    (strategy=GenerationType.IDENTITY) IDENTITY = AUTO_INCREMENT
    SEQUENCE (ORACLE, PostgreSQL, DB2, H2) order by sequence file or table
    TABLE :: Like sequence however create key building table (able ALL DB)
    AUTO :: auto (DEFAULT)
* */