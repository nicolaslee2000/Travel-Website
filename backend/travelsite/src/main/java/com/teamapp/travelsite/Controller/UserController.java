package com.teamapp.travelsite.Controller;


import com.teamapp.travelsite.Model.DTOs.UserDTO;
import com.teamapp.travelsite.Model.Entity.User;
import com.teamapp.travelsite.Model.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonObject;
import com.teamapp.travelsite.Exception.ResourceNotFoundException;
import com.teamapp.travelsite.User.Security.CurrentUser;
import com.teamapp.travelsite.User.Security.UserPrincipal;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private final UserRepository userRepository;
    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
}
    
    @PostMapping("/getUser")
    public User getUserById(@RequestBody UserDTO dto) {
    	System.out.println(dto);
    	return userRepository.findByEmail(dto.getEmail()).orElseThrow();
    }
    
    @PostMapping("/testingtesting")
    public String getTesting(@RequestBody JsonObject test) {
    	test.addProperty("hi", "hello");
    	System.out.println(test.toString());
    	return "hey it works";
    }

}

class TestClass{
	public TestClass() {
		
	}
	private String name;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+this.name;
	}
}
