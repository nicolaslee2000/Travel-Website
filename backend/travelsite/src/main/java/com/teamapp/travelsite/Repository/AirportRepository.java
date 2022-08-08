package com.teamapp.travelsite.Repository;

import com.teamapp.travelsite.initDatabase.Airport;

import java.util.List;
import java.util.Optional;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AirportRepository extends JpaRepository<Airport, String> {

	List<Airport> findByAirportIatacodeContainingIgnoreCase(String airportIatacode);

	List<Airport> findByAirportNameContainingIgnoreCase(String airportName);

//	@Query(value = "SELECT \"country_code\" from \"airport\"", nativeQuery = true)
	@Query(value="SELECT \"why\" FROM \"airport\"", nativeQuery = true)
	List<Airport> findAllAirports();

}

//a LEFT JOIN "
//+ "\"country\" c ON a.\"country_code\" = c.\"country_code\"
//WHERE UPPER(a.\"airport_iatacode\") "
//		+ "LIKE UPPER('%kr%') OR UPPER(a.\"airport_name\") LIKE UPPER('%kr%') OR UPPER(a.\"city_name\") "
//		+ "LIKE UPPER('%kr%') OR UPPER(c.\"country_code\") LIKE UPPER('%kr%') OR UPPER(c.\"country_name\") LIKE UPPER('%kr%')