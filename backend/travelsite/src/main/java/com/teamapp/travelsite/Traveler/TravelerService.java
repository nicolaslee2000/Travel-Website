package com.teamapp.travelsite.Traveler;

import com.teamapp.travelsite.Repository.TravelerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Deprecated
public class TravelerService {
    @Autowired
    TravelerRepository travelerRepository;
}
