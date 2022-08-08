package com.teamapp.travelsite.Repository;

import com.teamapp.travelsite.initDatabase.Airport;

import java.util.List;
import java.util.Optional;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AirportRepository extends JpaRepository<Airport, String> {



	@Query("SELECT a FROM Airport a LEFT JOIN Country c ON a.country_code = c.country_code"
			+ " WHERE UPPER(a.airportIatacode) LIKE %:str% OR UPPER(a.airportName) LIKE %:str% OR UPPER(a.city_name) "
			+ "LIKE %:str% OR UPPER(a.country_code) LIKE %:str% OR UPPER(c.country_name) LIKE %:str%")
	List<Airport> findAllAirports(@Param("str") String str, Pageable pageable);

}
