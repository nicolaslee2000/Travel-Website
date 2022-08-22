package com.teamapp.travelsite.Model.DTOs;
import com.teamapp.travelsite.Model.Entity.Gender;
import com.teamapp.travelsite.Model.Entity.Traveler;
import com.teamapp.travelsite.Model.Entity.User;
import lombok.*;
import org.modelmapper.ModelMapper;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TravelerDTO {

	private Long id;
    private String title;
    private Date dateOfBirth;
    private  String gender;
    private  String firstName;
    private  String lastName;

    private  String documentType;
    private  String number;
    private  String expiryDate;
    private  String issuanceCountry;
    private String dateOfIssue;
    private  String nationality;
    private String userId;

    private UserDTO userDTO;


    public Traveler toEntity(){
        return Traveler.builder()
                .dateOfBirth(this.dateOfBirth)
                .gender( this.gender)
                .firstName(this.firstName)
                .lastName(this.lastName)
                .user(userDTO.toEntity(userDTO))
                .documentType(this.documentType)
                .expiryDate(this.expiryDate)
                .number(this.number)
                .issuanceCountry(this.issuanceCountry)
                .dateOfIssue(this.dateOfIssue)
                .nationality(this.nationality)
                .title(title)
                .build();
    }


}
