package com.teamapp.travelsite.Service;

import com.teamapp.travelsite.Model.DTOs.TravelerDTO;
import com.teamapp.travelsite.Model.Entity.Traveler;

import java.util.List;
import java.util.Set;

public interface TravelerService {

    TravelerDTO findTravelerByName(String name);

    List<TravelerDTO> findTravelerByUserId(int id);

    void saveUpdatedTraveler(TravelerDTO travelerDTO) throws Exception;

    boolean deleteTraveler(long id) throws Exception;

    boolean isTravelerSaved(Long TravelerId, String userEmail) throws Exception;

    void CreateTraveler(TravelerDTO travelerDTO);

    List<TravelerDTO> initTraveler();
}
