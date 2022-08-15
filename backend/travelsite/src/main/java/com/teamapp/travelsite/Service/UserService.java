package com.teamapp.travelsite.Service;

import com.teamapp.travelsite.Model.DTOs.TravelerDTO;
import com.teamapp.travelsite.Model.Entity.User;
import org.springframework.data.domain.Page;

public interface UserService {
    User create(long id, String name, String email, String password);

    @Deprecated
    Page<User> getList(int page);

    User getUser(String name);

    User findUserByEmail(String name);

    User findUserByUserId(int id);

    void saveUpdatedUser(User user) throws Exception;

    boolean deleteUser(int id) throws Exception;

    boolean isUserSaved(Long id, String userEmail) throws Exception;



}
