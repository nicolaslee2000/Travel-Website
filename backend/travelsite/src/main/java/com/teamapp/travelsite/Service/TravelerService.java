package com.teamapp.travelsite.Service;

import com.teamapp.travelsite.Model.DTOs.TravelerDTO;

import java.util.List;

public interface TravelerService {


    List<TravelerDTO> findTravelerByUserId(Long id);

    void saveUpdatedTraveler(TravelerDTO travelerDTO) throws Exception;

    boolean deleteTraveler(int id) throws Exception;

    boolean isTravelerSaved(Long TravelerId, String userEmail) throws Exception;

    void CreateTraveler(TravelerDTO travelerDTO);

    List<TravelerDTO> findTravelerByTitle(String title);

}
