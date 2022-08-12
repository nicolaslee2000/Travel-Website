package com.teamapp.travelsite.Repository;

import com.teamapp.travelsite.Entity.TicketOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketOrderRepository extends JpaRepository<TicketOrder,Long> {
}
