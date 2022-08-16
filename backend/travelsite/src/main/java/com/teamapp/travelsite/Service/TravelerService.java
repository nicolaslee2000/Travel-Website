package com.teamapp.travelsite.Service;

import com.teamapp.travelsite.Model.DTOs.TravelerDTO;

import java.util.List;

public interface TravelerService {

    List<TravelerDTO> findTravelerByUserId(Long id);

    Long saveUpdatedTraveler(TravelerDTO travelerDTO) throws Exception;

    boolean deleteTraveler(Long id) throws Exception;

    boolean isTravelerSaved(Long TravelerId) throws Exception;

    Long CreateTraveler(TravelerDTO travelerDTO);

    List<TravelerDTO> findTravelerByTitle(String title);

}
