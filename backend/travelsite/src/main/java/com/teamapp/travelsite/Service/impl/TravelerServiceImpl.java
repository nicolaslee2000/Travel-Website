package com.teamapp.travelsite.Service.impl;

import com.teamapp.travelsite.Exception.NotFoundExceptionMessage;
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
    public List<TravelerDTO> findTravelerByUserId(Long id) {
        List<Traveler> travelers = this.travelerRepository.findByUserId(id);
        if (!travelers.isEmpty()){
            List<TravelerDTO> travelerDTOS = new ArrayList<>();
            travelers.forEach(e -> travelerDTOS.add(e.of(e)));
            return travelerDTOS; //of Method is Entity -> DTO
        } else throw new NotFoundExceptionMessage("Traveler Not Found!!!");

    }
    @Override
    public Long saveUpdatedTraveler(TravelerDTO travelerDTO) throws Exception {
        Traveler traveler = travelerDTO.toEntity();
        Optional<Traveler> byId = this.travelerRepository.findById(traveler.getId());
        if (byId.isPresent()){
            travelerRepository.delete(byId.get());
            return this.travelerRepository.save(traveler).getId();
        } else throw new NotFoundExceptionMessage("maybe not saved");

    }
    @Override
    public boolean deleteTraveler(Long id) throws Exception {
        Optional<Traveler> byId = this.travelerRepository.findById(id);
        if (byId.isPresent()) {
            this.travelerRepository.delete(byId.get());
            return true;
        } else {
            return false;
        }
    }
    @Override
    public boolean isTravelerSaved(Long TravelerId) throws Exception {
        Optional<Traveler> byId = this.travelerRepository.findById(TravelerId);
        if(byId.isPresent()) {
            return true;
        } else {
            return false;
        }
    }

    public boolean isTravelerSavedByTitle(String title) {
        List<Traveler> byTitle = this.travelerRepository.findByTitle(title);
        if (!byTitle.isEmpty()) {
            return true;
        } else {
            throw new RuntimeException("Not Saved");
        }
    }
    @Override
    public Long CreateTraveler(TravelerDTO travelerDTO) {
        Traveler traveler = this.travelerRepository.save(travelerDTO.toEntity());
        return traveler.getId();
    }

    @Override
    public List<TravelerDTO> findTravelerByTitle(String title) {
        List<Traveler> byTitle = this.travelerRepository.findByTitle(title);
        List<TravelerDTO> travelerDTOS = new ArrayList<>();
        byTitle.forEach(e -> travelerDTOS.add(e.of(e)));
        if (!travelerDTOS.isEmpty()) {
            return travelerDTOS;
        } else new NotFoundExceptionMessage("traveler Not found");
        return travelerDTOS;
    }


}
