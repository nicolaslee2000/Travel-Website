package com.teamapp.travelsite.Model.Repository;

import com.teamapp.travelsite.Model.Entity.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {
}
