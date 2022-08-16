package com.teamapp.travelsite.Controller;

import com.teamapp.travelsite.Exception.NotFoundExceptionMessage;
import com.teamapp.travelsite.Model.DTOs.TravelerDTO;
import com.teamapp.travelsite.Service.impl.TravelerServiceImpl;
import lombok.SneakyThrows;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/traveler")
public class TravelerController {
    TravelerServiceImpl travelerService;
    @SneakyThrows
    @PostMapping("/create")
    public String createTraveler(@RequestBody TravelerDTO travelerDTO) {
        //if cannot receve TravelerDTO, Maybe we would be make Request Class.
        //receve user info maybe least userID(Long), InnerObj
        Long savedId = travelerService.CreateTraveler(travelerDTO);
        if (travelerService.isTravelerSaved(savedId)) {
            return "Saved Complete";
        } else {
            return "Not Saved";
        }
    }
    @GetMapping("/{id}") //read
    public List<TravelerDTO> showTraveler(@RequestParam Long id) {
        return travelerService.findTravelerByUserId(id);
    }

    @PostMapping("/update")
    public String updateTraveler(@RequestBody TravelerDTO travelerDTO) throws Exception {
        travelerService.saveUpdatedTraveler(travelerDTO);
        if (travelerService.isTravelerSavedByTitle(travelerDTO.getTitle())) {
            return "update Complete";
        }else throw new NotFoundExceptionMessage("Not founded");
    }

    @GetMapping("/delete")
    public String deleteTraveler(@RequestParam Long id) throws Exception{
        travelerService.deleteTraveler(id);
        if (!travelerService.isTravelerSaved(id)) {
            return " delete complete";
        } else throw new RuntimeException("maybe not deleted");
    }


}
