package com.teamapp.travelsite.Model.DTOs;
import com.teamapp.travelsite.Traveler.Traveler;
import com.teamapp.travelsite.User.User;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TravelerDTO {
    private  String dateOfBirth;
    private  String gender;
    private  String firstName;
    private  String lastName;
    private User user;

    private  String documentType;
    private  String number;
    private  String expiryDate;
    private  String issuanceCountry;
    private  String nationality;
    public Traveler toEntity(){
        return Traveler.builder()
                .dateOfBirth(this.dateOfBirth)
                .gender(this.gender)
                .firstName(this.firstName)
                .lastName(this.lastName)
                .user(user)
                .documentType(this.documentType)
                .expiryDate(this.expiryDate)
                .number(this.number)
                .issuanceCountry(this.issuanceCountry)
                .nationality(this.nationality)
                .build();
    }
}
