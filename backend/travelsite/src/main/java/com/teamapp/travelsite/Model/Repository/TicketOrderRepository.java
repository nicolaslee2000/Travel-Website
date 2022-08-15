package com.teamapp.travelsite.Model.Repository;

import com.teamapp.travelsite.Model.Entity.TicketOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketOrderRepository extends JpaRepository<TicketOrder,Long> {
    List<TicketOrder> findByUserId (Long id);
}
