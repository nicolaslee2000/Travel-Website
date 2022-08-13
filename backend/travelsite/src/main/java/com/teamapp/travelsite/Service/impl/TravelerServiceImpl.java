package com.teamapp.travelsite.Service.impl;

import com.teamapp.travelsite.Model.Repository.TravelerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TravelerServiceImpl {
    @Autowired
    TravelerRepository travelerRepository;

}
