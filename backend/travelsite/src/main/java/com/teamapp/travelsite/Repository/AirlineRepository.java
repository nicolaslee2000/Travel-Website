package com.teamapp.travelsite.Repository;

import com.teamapp.travelsite.Entity.Airline;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirlineRepository extends JpaRepository<Airline,String> {
}
