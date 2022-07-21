package com.teamapp.travelsite.AirlineBooking;

import com.amadeus.resources.TripDetail;
import org.springframework.stereotype.Service;

import java.util.HashMap;
@Service
public interface AirlineService {
    public HashMap<String,AirlineVO> serachAirline(String from, String to, String depart,String goback,String adult,String child);

}

