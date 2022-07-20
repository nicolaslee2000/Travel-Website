package com.teamapp.travelsite.AirlineBooking;

import org.springframework.boot.Banner;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;

@RestController
public class AirlineController {
    @GetMapping("/book")
    public String showBookingPage(){
        return "";
    }

    @GetMapping("/book/flight")
    public String showBookingPage(Model model){
     //model.addAttribute()
     return"";
    }

    @GetMapping("/book/flight/confirm")
        public String showBookConfirm(Model model){
            //
        return "";
        }

}
/*
api 에 대한 이해.
 */
