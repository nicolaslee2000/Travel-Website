package com.teamapp.travelsite.Model.Repository;

import com.teamapp.travelsite.Model.Entity.TicketOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketOrderRepository extends JpaRepository<TicketOrder,Long> {
}
