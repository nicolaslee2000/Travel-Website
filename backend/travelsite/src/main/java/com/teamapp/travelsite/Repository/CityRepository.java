package com.teamapp.travelsite.Repository;

import com.teamapp.travelsite.initDatabase.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends JpaRepository<City,String> {
}
