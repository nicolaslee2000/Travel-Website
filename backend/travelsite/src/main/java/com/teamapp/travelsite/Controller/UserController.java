package com.teamapp.travelsite.Controller;



import com.google.gson.JsonObject;
import com.teamapp.travelsite.Exception.NotFoundExceptionMessage;
import com.teamapp.travelsite.Exception.UserNotFoundException;
import com.teamapp.travelsite.Model.DTOs.UserDTO;

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

        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
}
    @PostMapping("/user/current")
    public UserDTO showCurrentUser(@RequestBody JsonObject credential) {
        User user = userRepository.findByEmail(credential.get("email").getAsString()).get();
        if (!user.getEmail().isEmpty()) {
            return user.of(user);
        } else throw new NotFoundExceptionMessage("not founded");


    }

    @PostMapping("/getId")
    public String getId(@RequestBody JsonObject credential) {
    	System.out.println(credential);
    	System.out.println("comon");
    	User user = userRepository.findByEmail(credential.get("email").getAsString()).get();
    	return user.getId().toString();
    }
}