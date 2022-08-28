package com.teamapp.travelsite.Model.Repository;

import com.teamapp.travelsite.Model.Entity.GroupChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupChatRoomRepository extends JpaRepository<GroupChatRoom, Long> {
}
