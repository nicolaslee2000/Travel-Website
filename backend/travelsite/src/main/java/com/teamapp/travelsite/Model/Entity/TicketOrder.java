package com.teamapp.travelsite.Model.Entity;

import com.teamapp.travelsite.Model.DTOs.TicketOrderDTO;
import com.teamapp.travelsite.Model.Entity.ForJoinTable.TravelerWithOrder;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.modelmapper.ModelMapper;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "ORDER")
@Builder
@Getter
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

    @Column(name = "user_id", insertable = false, updatable = false)
    private Long userId;


    @ManyToOne (fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinColumn(name = "arrive_airport", referencedColumnName = "airport_iata")
    private Airport airport;

    @ManyToOne (fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinColumn(name = "depart_airport", referencedColumnName = "airport_iata")
    private Airport airports;

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private User user;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "ticketOrder")
    private List<TravelerWithOrder> travelerWithOrderList;

    public TicketOrderDTO of(TicketOrder ticketOrder) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(ticketOrder, TicketOrderDTO.class); //map(Entity,DTO.class)
    }

}
