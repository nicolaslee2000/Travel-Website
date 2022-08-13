package com.teamapp.travelsite.Model.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.teamapp.travelsite.User.TempMail;

@Repository
public interface TempMailRepository  extends JpaRepository<TempMail,Long> {
//	
////    @Query(value = "select id from USER_TABLE where id = : id", nativeQuery = true)
////    List<TempMail> searchParamRepo(@Param("id") String id);
////
////    Optional<TempMail> findByname(String username);
//
//    @Query(value =
//            "SELECT * FROM TEMPMAIL_TABLE" +
//                    "ORDER BY email"
//            ,nativeQuery = true)
//    List<TempMail> searchByEmail(@Param("email") String email);
//

//
//    Boolean existsByEmail(String email);
	
    Optional<TempMail> findByEmail(String email);
    
    //인증여부 검사
    @Query(value = "select emailauth from tempmail_table WHERE email = :email", nativeQuery = true)
    String searchEmailAuth(@Param("email") String email);

    @Query(value = "DELETE FROM TEMPMAIL_TABLE WHERE EMAIL = :email", nativeQuery = true)
    void deleteTempMail(@Param("email") String email);

}
