package com.teamapp.travelsite.Repository;

import com.teamapp.travelsite.Entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CountryRepository extends JpaRepository<Country,String> {
    Optional<Country> findByCountryName(String country_name);

}
