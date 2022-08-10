package com.teamapp.travelsite.Entity;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "ORDER")
public class Order {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Long id;

    @GeneratedValue //SEQUENCE? UNIQUE?
    @Column(nullable = false)
    private Long orderNumber;
}
