package com.teamapp.travelsite.Repository;

import com.teamapp.travelsite.initDatabase.Airport;

import java.util.List;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@ComponentScan("com.teamapp.travelsite.initDatabase")
@Repository
public interface AirportRepository extends JpaRepository<Airport,String> {
	
	List<Airport> findByAirport_iatacodeContainingIgnoreCase(String airport_iatacode);
	List<Airport> findByAirport_nameContainingIgnoreCase(String airport_name);
	
}
