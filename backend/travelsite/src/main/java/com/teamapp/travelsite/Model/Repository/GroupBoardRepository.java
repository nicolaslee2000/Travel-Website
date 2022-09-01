package com.teamapp.travelsite.Model.Repository;

import com.teamapp.travelsite.Model.Entity.GroupBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupBoardRepository extends JpaRepository<GroupBoard, Long> {
}
