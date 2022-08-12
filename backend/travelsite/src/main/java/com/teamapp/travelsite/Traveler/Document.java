package com.teamapp.travelsite.Traveler;

import lombok.*;
import org.hibernate.annotations.ForeignKey;

import javax.persistence.*;

@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Builder
@Table(name = "DOCUMENT")
public class Document {
    //@JoinColumn(name = "") 으로 컬럼간 직접연결 가능
    @ManyToOne
    private Traveler traveler;

    @Id
    @GeneratedValue
    private Long doc_idx;

    private  String documentType;
    private  String number;
    private  String expiryDate;
    private  String issuanceCountry;
    private  String nationality;
    private  boolean holder;
}
