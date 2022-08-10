package com.teamapp.travelsite.Traveler;

import com.teamapp.travelsite.DTOs.TravelerDTO;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/traveler")
public class TravelerController {

    @PostMapping("/reg")
    public String registerTraveler(){ //아무튼 뭘 받아올거임

        TravelerDTO travelerDTO;

        return "Model Object Return able??";
    }

    @RequestMapping("/{id}")
    public String showTraveler(@PathVariable Long key, Model model){

        return null;
    }

}
