package com.teamapp.travelsite.User;

import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    @Query(value = "select id from USER where id = : id", nativeQuery = true)
    List<User> searchParamRepo(@Param("id") String id);

    Optional<User> findByname(String username);


}
