package com.teamapp.travelsite.Model.Entity;

import javax.persistence.*;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ByteArraySerializer;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;

//@Entity

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Table(name = "AIRLINE")
public class Airline {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long air_idx;

    @Column(nullable = false)
    private String airline_iatacode;

    @Column(nullable = true) //Warning : insert Null Data
    private String airline_name;
}
