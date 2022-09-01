package com.teamapp.travelsite.Controller;

import com.teamapp.travelsite.Model.DTOs.UserDTO;
import com.teamapp.travelsite.Service.impl.UserServiceImpl;
import org.springframework.boot.actuate.endpoint.web.annotation.RestControllerEndpoint;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Deprecated
@RestController
@RequestMapping("/test")
public class OnlyTestController {
    UserServiceImpl userService;

    @GetMapping("/userlist")
    public List<UserDTO> showAllUsers(@RequestParam String key) {
        if (key.equals("key")) {
            return userService.showAllUsers();
        } else {
            throw new RuntimeException("GET OUT");
        }
    }


}
