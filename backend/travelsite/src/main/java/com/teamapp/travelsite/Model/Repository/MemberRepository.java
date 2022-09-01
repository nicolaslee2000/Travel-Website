package com.teamapp.travelsite.Model.Repository;

import com.teamapp.travelsite.Model.Entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
}
