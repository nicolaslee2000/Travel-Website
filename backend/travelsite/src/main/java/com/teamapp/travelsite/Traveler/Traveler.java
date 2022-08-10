package com.teamapp.travelsite.Traveler;

import com.teamapp.travelsite.User.User;
import lombok.*;

import javax.persistence.*;
import javax.print.Doc;
import java.util.ArrayList;
import java.util.List;

@Getter
@Table(name = "TRAVELER")
@Entity
@Builder
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Traveler {

    @Id
    private String id;

    private String dateOfBirth;
    private String gender;
    private String firstName;
    private String lastName;
    private String emailAddress;
    private String phone;

    @OneToMany(mappedBy = "traveler")
    private List<Document> documentList = new ArrayList<>();
    @ManyToOne
    private User user;
}
