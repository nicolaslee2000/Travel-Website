package com.teamapp.travelsite.Controller;

import com.teamapp.travelsite.Exception.NotFoundExceptionMessage;
import com.teamapp.travelsite.Model.DTOs.CountryDTO;
import com.teamapp.travelsite.Model.DTOs.TravelerDTO;
import com.teamapp.travelsite.Model.DTOs.UserDTO;
import com.teamapp.travelsite.Model.Entity.Country;
import com.teamapp.travelsite.Model.Repository.AirportRepository;
import com.teamapp.travelsite.Model.Repository.CountryRepository;
import com.teamapp.travelsite.Service.UserService;
import com.teamapp.travelsite.Service.impl.TravelerServiceImpl;
import com.teamapp.travelsite.Service.impl.UserServiceImpl;

import lombok.SneakyThrows;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;


@RestController
@RequestMapping("/traveler")
public class TravelerController {
	@Autowired
    TravelerServiceImpl travelerService;
	
	@Autowired
	UserServiceImpl userService;
	
	@Autowired
	CountryRepository countryRepository;
	@Autowired
	AirportRepository airportRepository;
	
    @SneakyThrows
    @PostMapping("/create")
    public String createTraveler(@RequestBody TravelerDTO travelerDTO) {
        //if cannot receve TravelerDTO, Maybe we would be make Request Class.
        //receve user info maybe least userID(Long), InnerObj
    	UserDTO userDto = new UserDTO();
    	userDto.setId(Long.valueOf(travelerDTO.getUserId()));
    	travelerDTO.setUserDTO(userDto);
        Long savedId = travelerService.CreateTraveler(travelerDTO);
        if (travelerService.isTravelerSaved(savedId)) {
            return "Saved Complete";
        } else {
            return "Not Saved";
        }
    }
    @GetMapping("/travelers") //read
    public List<TravelerDTO> showTraveler(@RequestParam Long id) {
        return travelerService.findTravelerByUserId(id);
    }

    @PostMapping("/update")
    public String updateTraveler(@RequestBody TravelerDTO travelerDTO) throws Exception {
    	UserDTO userDto = new UserDTO();
    	userDto.setId(Long.valueOf(travelerDTO.getUserId()));
    	travelerDTO.setUserDTO(userDto);
        travelerService.saveUpdatedTraveler(travelerDTO);
        if (travelerService.isTravelerSavedByTitle(travelerDTO.getTitle())) {
            return "update Complete";
        }else throw new NotFoundExceptionMessage("Not founded");
    }

    @GetMapping("/delete")
    public String deleteTraveler(@RequestParam Long id) throws Exception{
    	System.out.println(id);
    	System.out.println("hi");
        travelerService.deleteTraveler(id);
        if (!travelerService.isTravelerSaved(id)) {
            return " delete complete";
        } else throw new RuntimeException("maybe not deleted");
    }
    
    @GetMapping("/countries")
    public List<Country> getCountries() {
    	return countryRepository.findAll(Sort.by(Sort.Direction.ASC, "countryName"));
    }
    
    @GetMapping("/airportName")
    public String getAirportName(@RequestParam String iata) {
    	return airportRepository.findByIata(iata);
    }

}
