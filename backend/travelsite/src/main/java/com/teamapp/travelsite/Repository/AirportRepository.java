package com.teamapp.travelsite.Repository;

import com.teamapp.travelsite.initDatabase.Airport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirportRepository extends JpaRepository<Airport,String> {
}
