package com.teamapp.travelsite.User;

import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    @Query(value = "select id from USER where id = : id", nativeQuery = true)
    List<User> searchParamRepo(@Param("id") String id);


}
