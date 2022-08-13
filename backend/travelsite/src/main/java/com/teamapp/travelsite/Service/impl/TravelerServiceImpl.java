package com.teamapp.travelsite.Service.impl;

import com.teamapp.travelsite.Model.DTOs.TravelerDTO;
import com.teamapp.travelsite.Model.Entity.Traveler;
import com.teamapp.travelsite.Model.Repository.TravelerRepository;
import com.teamapp.travelsite.Model.Repository.UserRepository;
import com.teamapp.travelsite.Service.TravelerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class TravelerServiceImpl implements TravelerService {
    private final UserRepository userRepository;
    private  final TravelerRepository travelerRepository;
    @Autowired
    public TravelerServiceImpl(UserRepository userRepository, TravelerRepository travelerRepository) {
        this.userRepository = userRepository;
        this.travelerRepository = travelerRepository;
    }
    @Override
    public TravelerDTO findTravelerByName(String name) {
        return null;
    }

    @Override
    public List<TravelerDTO> findTravelerByUserId(int id) {

        List<Traveler> travelerList= this.travelerRepository.findByUserId(id);
        ;

        return null;
    }

    @Override
    public void saveUpdatedTraveler(TravelerDTO travelerDTO) throws Exception {

    }

    @Override
    public boolean deleteTraveler(long id) throws Exception {
        return false;
    }

    @Override
    public boolean isTravelerSaved(Long TravelerId, String userEmail) throws Exception {
        return false;
    }

    @Override
    public void CreateTraveler(TravelerDTO travelerDTO) {

    }

    @Override
    public List<TravelerDTO> initTraveler() {
        return null;
    }
}
