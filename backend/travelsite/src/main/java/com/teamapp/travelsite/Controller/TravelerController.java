package com.teamapp.travelsite.Controller;

import com.teamapp.travelsite.Model.DTOs.TravelerDTO;
import com.teamapp.travelsite.Service.impl.TravelerServiceImpl;
import lombok.SneakyThrows;
import org.springframework.web.bind.annotation.*;




@RestController
@RequestMapping("/traveler")
public class TravelerController {
    TravelerServiceImpl travelerService;

    @SneakyThrows
    @PostMapping("/create")
    public String createTraveler(@RequestBody TravelerDTO travelerDTO) {
        //if cannot receve TravelerDTO, Maybe we would be make Request Class.
        //receve user info maybe least userID(Long), InnerObj
        travelerService.CreateTraveler(travelerDTO);
        if (travelerService.isTravelerSaved(travelerDTO.toEntity().getId(), travelerDTO.getUserDTO().getEmail())) {
            return "Saved Complete";
        } else {
            return "Not Saved";
        }
    }

}
