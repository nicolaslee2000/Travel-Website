package com.teamapp.travelsite.Service;

import com.teamapp.travelsite.Model.Entity.User;
import org.springframework.data.domain.Page;

public interface UserService {
    User create(long id, String name, String email, String password);

    @Deprecated
    Page<User> getList(int page);

    User getUser(String name);
}
