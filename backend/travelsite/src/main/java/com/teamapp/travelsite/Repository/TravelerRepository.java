package com.teamapp.travelsite.Repository;

import com.teamapp.travelsite.Traveler.Traveler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TravelerRepository extends JpaRepository<Traveler, Integer> {
}