package com.teamapp.travelsite.Model.Entity.ForJoinTable;

import com.teamapp.travelsite.Model.Entity.TicketOrder;
import com.teamapp.travelsite.Model.Entity.Traveler;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "TRAVELER_ORDER")
public class TravelerWithOrder implements Serializable {

    @Id
    @GeneratedValue //in few date we make seq
    @Column(nullable = false)
    private Long orderGroupNumber;

    @ManyToOne
    @JoinColumn(name = "travelerId")
    private Traveler traveler;

    @ManyToOne
    @JoinColumn(name = "orderId")
    private TicketOrder ticketOrder;


}
