package com.teamapp.travelsite.Model.Repository;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.teamapp.travelsite.Model.Entity.TempMail;

@Repository
public interface TempMailRepository  extends JpaRepository<TempMail,Long> {

    Optional<TempMail> findByEmail(String email);
    
    //인증여부 검사
    @Query(value = "select emailauth from tempmail_table WHERE email = :email", nativeQuery = true)
    String searchEmailAuth(@Param("email") String email);

    @Query(value = "delete from tempmail_table where ((SYSTIMESTAMP - INTERVAL ‘10’ MINUTE) > createDate)", nativeQuery = true)
    List<TempMail> deleteExpiredMail(Timestamp createDate); 
}
