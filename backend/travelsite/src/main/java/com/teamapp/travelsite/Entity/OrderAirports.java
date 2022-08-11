package com.teamapp.travelsite.Entity;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
//조인테이블은 안썼으면 좋겠는데... 근데 결국 넘겨줘야하는건 Airport 객체라서 돌아버리겠네
public class OrderAirports {
    @Id
    @Column(name = "arrival_airport")
    private Long JonnaSibal;
}
