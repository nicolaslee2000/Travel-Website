package com.teamapp.travelsite.Model.Repository;

import com.teamapp.travelsite.Model.Entity.Traveler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TravelerRepository extends JpaRepository<Traveler, Integer> {


    List<Traveler> findByUserId(Long id);

    List<Traveler> findByTitle(String title);
}