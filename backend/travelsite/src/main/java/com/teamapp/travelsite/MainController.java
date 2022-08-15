package com.teamapp.travelsite;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MainController {
    @GetMapping("/")
    public String main() {
        return "localhost:3000";
    }
}
