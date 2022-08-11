package com.teamapp.travelsite.Entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "ORDER")
@Builder
public class Order { ///ㅁㄴㅇㄹㄹㄹㄹㄹㄹㄹㄹㄻㄴㅇㅇㅁㄴㄹㄴㅇㅁㄻㄴㅇ
    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long id;

    //@GeneratedValue //SEQUENCE? UNIQUE?
    @Column(nullable = true)
    private Long orderNumber;

    @Column(name = "depart_airport")
    private Airport depart;
    @Column(name = "arrive_airport")
    private Airport arrive;

    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinColumns({
            @JoinColumn(name = "depart_airport", referencedColumnName = "airport_iata"),
            @JoinColumn(name = "arrive_airport", referencedColumnName = "airport_iata")
    })
    private List<Airport> airport;

    private Date arrivalDate;

    private Date departureDate;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date OrderCreationDate;

    //@ManyToMany()
    //쿼리 자원 및 효율성에서는 비효율적이기때문에 원칙상 조인테이블을 따로 생성하기를 권장함.
    //근데 안되잖아 왜 ㅅㅂ
    //Many orders Many Travelers
}
