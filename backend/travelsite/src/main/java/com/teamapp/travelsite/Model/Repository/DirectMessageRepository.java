package com.teamapp.travelsite.Model.Repository;

import com.teamapp.travelsite.Model.Entity.DirectMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DirectMessageRepository extends JpaRepository<DirectMessage,Long> {
}
