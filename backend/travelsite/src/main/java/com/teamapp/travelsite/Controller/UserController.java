package com.teamapp.travelsite.Controller;


import com.teamapp.travelsite.Model.Entity.User;
import com.teamapp.travelsite.Model.Repository.UserRepository;
import com.teamapp.travelsite.User.CurrentUser;
import com.teamapp.travelsite.User.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.teamapp.travelsite.Exception.ResourceNotFoundException;


import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    @Autowired
    private final UserRepository userRepository;
    @GetMapping("/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findByEmail(userPrincipal.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getEmail()));
    }
}
