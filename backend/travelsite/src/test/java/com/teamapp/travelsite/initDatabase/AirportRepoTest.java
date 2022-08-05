package com.teamapp.travelsite.initDatabase;

import com.teamapp.travelsite.DTOs.AirportDTO;
import com.teamapp.travelsite.Repository.AirportRepository;
import org.aspectj.lang.annotation.After;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;



@DataJpaTest
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
        Country country = new Country("discoun","discountry");


        AirportDTO airport = new AirportDTO("anything","anything","anything");
        // when
        Airport savedAirport = airportRepository.save(airport.);
        // then
        Assertions.assertThat(airport).isSameAs(savedAirport);
        Assertions.assertThat(airport.getAirport_iatacode()).isEqualTo(savedAirport.getAirport_iatacode());
        Assertions.assertThat(airport.getCity()).isNotNull();

        //result : failed
    }

    }