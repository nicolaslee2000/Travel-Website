package com.teamapp.travelsite.initDatabase;

import com.teamapp.travelsite.Repository.AirportRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;



@DataJpaTest
public class AirportRepoTest {
    @Autowired
    private AirportRepository airportRepository;

    @Test
    @DisplayName("for Save To DB")
    void saveMember() {
        // given
        City city = new City("City_name","Country_code","country"); //여기도 not null 요구

      Airport airport = new Airport("1234",city);
        // when
        Airport savedAirport = airportRepository.save(airport);
        // then
        Assertions.assertThat(airport).isSameAs(savedAirport);
        Assertions.assertThat(airport.getAirport_iatacode()).isEqualTo(savedAirport.getAirport_iatacode());
        Assertions.assertThat(airport.getCity()).isNotNull();

        //result : failed
    }

    }