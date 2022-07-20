package com.teamapp.travelsite;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //rest api 사용
public class MainController {
    @GetMapping("/")
    public String showHomepage(){
        return "";
    }
    @GetMapping("/register")
    public String showRegister(){
        return "";
    }

    @GetMapping("/login")
    public String showLogin(){
        return "";
    }


}
