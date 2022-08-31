package com.teamapp.travelsite.Model.Repository;


import com.teamapp.travelsite.Model.Entity.UserRefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRefreshTokenRepository extends JpaRepository<UserRefreshToken, Long> {
    UserRefreshToken findByUserEmail(String userEmail);
    UserRefreshToken findByUserEmailAndRefreshToken(String email, String refreshToken);
}
