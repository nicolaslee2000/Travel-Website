package com.teamapp.travelsite.Traveler;

import com.teamapp.travelsite.Model.Repository.TravelerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TravelerService {
    @Autowired
    TravelerRepository travelerRepository;

}
