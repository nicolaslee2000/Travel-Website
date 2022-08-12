package com.teamapp.travelsite.Repository;

import com.teamapp.travelsite.Entity.Airport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AirportRepository extends JpaRepository<Airport,String> {
    Optional<Airport> findByAirportName(String AirportName);
}
