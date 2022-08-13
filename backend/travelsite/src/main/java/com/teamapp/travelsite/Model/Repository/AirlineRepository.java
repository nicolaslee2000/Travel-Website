package com.teamapp.travelsite.Model.Repository;

import com.teamapp.travelsite.Model.Entity.Airline;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirlineRepository extends JpaRepository<Airline,String> {
}
