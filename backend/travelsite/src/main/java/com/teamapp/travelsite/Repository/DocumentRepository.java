package com.teamapp.travelsite.Repository;

import com.teamapp.travelsite.Traveler.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRepository extends JpaRepository<Document,Integer> {
}
