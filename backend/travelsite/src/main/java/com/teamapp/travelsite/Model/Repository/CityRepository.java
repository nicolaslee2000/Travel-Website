package com.teamapp.travelsite.Model.Repository;

import com.teamapp.travelsite.Model.Entity.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CityRepository extends JpaRepository<City,String> {
    Optional<City> findByCityName(String city_name);
}
