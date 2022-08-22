package com.teamapp.travelsite.Model.Entity;

import com.teamapp.travelsite.Model.DTOs.TravelerDTO;
import lombok.*;
import org.modelmapper.ModelMapper;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Getter
@Table(name = "TRAVELER")
@Entity
@Builder
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Traveler {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;
    private Date dateOfBirth;

//    @Enumerated(EnumType.STRING)
    private String gender;

    private String firstName;
    private String lastName;

    private  String documentType;
    private  String number;
    private  String expiryDate;
    private  String issuanceCountry;
    private String dateOfIssue;
    private  String nationality;

    @Column(name = "user_id",insertable = false, updatable = false)
    private Long userId;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private User user;

    @ManyToMany(cascade = CascadeType.MERGE)
    private List<TicketOrder> ticketOrderList;

    public TravelerDTO of(Traveler traveler) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(traveler, TravelerDTO.class); //map(Entity,DTO.class)
    }
}
