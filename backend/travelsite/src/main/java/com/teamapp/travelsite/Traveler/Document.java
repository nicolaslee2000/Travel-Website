package com.teamapp.travelsite.Traveler;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ForeignKey;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "DOCUMENT")
public class Document {
    //@JoinColumn(name = "") 으로 컬럼간 직접연결 가능
    @ManyToOne
    private Traveler traveler;

    @Id
    @GeneratedValue
    private String doc_idx;

    private @Getter @Setter String documentType;
    private @Getter @Setter String number;
    private @Getter @Setter String expiryDate;
    private @Getter @Setter String issuanceCountry;
    private @Getter @Setter String nationality;
    private @Getter @Setter boolean holder;
}
