package com.teamapp.travelsite.Traveler;

import com.teamapp.travelsite.User.User;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Table(name = "TRAVELER")
@Entity
public class Traveler {


    @OneToOne
    private User user;

    @Id
    private @Getter @Setter String id; // USER와 FK 설정

    private @Getter @Setter String dateOfBirth;
    private @Getter @Setter String gender;
    private @Getter @Setter String firstName;
    private @Getter @Setter String lastName;
    private @Getter @Setter String emailAddress;
    private @Getter @Setter String phone;
    // private @Getter @Setter Document[] documents;

    @OneToMany(mappedBy = "traveler")
    private List<Document> document = new ArrayList<>();
}
