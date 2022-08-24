package com.teamapp.travelsite.Model.Entity;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "DIRECTMESSAGE")
public class DirectMessage {

    @Id
    @GeneratedValue
    private Long dmId;

    @OneToOne
    @JoinColumn(name = "creator")
    private User creator;

    @OneToOne
    @JoinColumn(name = "receiver")
    private User receiver;

    @Column(nullable = false)
    private String container;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date sendDate;

}
