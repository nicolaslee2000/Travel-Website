package com.teamapp.travelsite.DTOs;

import com.teamapp.travelsite.Traveler.Document;
import com.teamapp.travelsite.Traveler.Traveler;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.print.Doc;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DocumentDTO {
    private  String documentType;
    private  String number;
    private  String expiryDate;
    private  String issuanceCountry;
    private  String nationality;
    private  boolean holder;
    private Traveler traveler;

    public Document toEntity(){
        return Document.builder()
                .documentType(this.documentType)
                .expiryDate(this.expiryDate)
                .number(this.number)
                .issuanceCountry(this.issuanceCountry)
                .nationality(this.nationality)
                .holder(this.holder)
                .traveler(traveler)
                .build();
    }
}
