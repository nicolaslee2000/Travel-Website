package com.teamapp.travelsite.DTOs;
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

    public Traveler toEntity(){
        return Traveler.builder()
                .dateOfBirth(this.dateOfBirth)
                .gender(this.gender)
                .firstName(this.firstName)
                .lastName(this.lastName)
                .user(user)
                .build();
    }
}
