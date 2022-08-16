package com.teamapp.travelsite.Model.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.teamapp.travelsite.Model.Entity.TempMail;

@Repository
public interface TempMailRepository  extends JpaRepository<TempMail,Long> {

	Boolean existsByEmail(String email);
	
    Optional<TempMail> findByEmail(String email);
    
    //인증여부 검사
    @Query(value = "select emailauth from tempmail_table WHERE email = :email", nativeQuery = true)
    String searchEmailAuth(@Param("email") String email);

//    전송시간이 10분 이상 지난 인증 메일을 배열로 조회  
    @Query(value = "SELECT \"id\" FROM TEMPMAIL_TABLE WHERE (SYSTIMESTAMP - INTERVAL '10' minute) > \"createDate\"", nativeQuery = true)
    long[] searchExpiredMail(); 
    
//    //보여주기용 10초
//    @Query(value = "SELECT \"id\" FROM TEMPMAIL_TABLE WHERE (SYSTIMESTAMP - INTERVAL '10' second) > \"createDate\"", nativeQuery = true)
//    long[] searchExpiredMail(); 
    
}
