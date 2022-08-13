package com.teamapp.travelsite.Model.Repository;

import com.teamapp.travelsite.Model.Entity.Traveler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TravelerRepository extends JpaRepository<Traveler, Integer> {
}