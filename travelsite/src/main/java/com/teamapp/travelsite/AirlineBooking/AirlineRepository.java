package com.teamapp.travelsite.AirlineBooking;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.HashMap;
import java.util.List;

public interface AirlineRepository extends JpaRepository<AirlineVO,String> {
    List<AirlineVO> findAllbyOrderByIdDesc(); //전체 조회

    List<AirlineVO> findPageByOrderByCountDesc(); //페이징 처리용

}
