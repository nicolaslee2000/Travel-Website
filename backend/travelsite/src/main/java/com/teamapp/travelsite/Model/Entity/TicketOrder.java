package com.teamapp.travelsite.Model.Entity;

import com.teamapp.travelsite.User.User;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "ORDER")
@Builder
//rename reason : statch between javax.persistence.*
public class TicketOrder {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long id;

    //@GeneratedValue //SEQUENCE? UNIQUE?
    @Column(nullable = true)
    private Long orderNumber;

    @Column(name = "depart_airport",insertable = false,updatable = false)
    private String depart;
    @Column(name = "arrive_airport",insertable = false,updatable = false)
    private String arrive;

    private Date arrivalDate;

    private Date departureDate;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date OrderCreationDate;



    @ManyToOne (fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinColumn(name = "arrive_airport", referencedColumnName = "airport_name")
    private Airport airport;

    @ManyToOne (fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinColumn(name = "depart_airport", referencedColumnName = "airport_name")
    private Airport airports;

    @ManyToOne (fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private User user;


}