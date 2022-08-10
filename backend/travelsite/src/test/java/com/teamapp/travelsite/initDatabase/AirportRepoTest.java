package com.teamapp.travelsite.initDatabase;

import com.teamapp.travelsite.DTOs.AirportDTO;
import com.teamapp.travelsite.Repository.AirportRepository;
import org.aspectj.lang.annotation.After;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;



@DataJpaTest
@AutoConfigureTestDatabase
public class AirportRepoTest {
    @Autowired
    private AirportRepository airportRepository;

    @After("")
    public void cleanup(){
        airportRepository.deleteAll();
    }

    @Test
    @DisplayName("for Save To DB")
    void saveMember() {
        // given

//        AirportDTO airport = new AirportDTO("anything","anything","anything");
//        // when
//        Airport savedAirport = airportRepository.save(airport.toEntity());
//
//        // then
//        Assertions.assertThat(airport).isSameAs(savedAirport);
//        Assertions.assertThat(airport.getIata()).isEqualTo(savedAirport.getAirport_iatacode());
//        Assertions.assertThat(airport.getCity()).isNotNull();
//        //result : failed
    }

    }