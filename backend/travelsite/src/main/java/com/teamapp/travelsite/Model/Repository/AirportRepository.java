package com.teamapp.travelsite.Model.Repository;

import com.teamapp.travelsite.Model.Entity.Airport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AirportRepository extends JpaRepository<Airport,Long> {
    Optional<Airport> findByAirportName(String AirportName);


    List<Airport> findByAirportNameContainingIgnoreCase(String airportName);

    List<Airport> findByAirportIataCodeContainingIgnoreCase(String code);

    List<Airport> findByCountryCountryNameContainingIgnoreCase(String countryName);

    @Query(value="select \"airport_name\" from airport where \"airport_iata\" = ?1", nativeQuery = true)
    String findByIata(String AirportIataCode);

}
