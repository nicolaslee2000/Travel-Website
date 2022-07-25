package com.teamapp.travelsite.AirlineBooking;

import com.teamapp.travelsite.Api.AirlineApi;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class AirlineServicempl implements AirlineService{

    @Override
    public HashMap<String, AirlineVO> serachAirline(String from, String to, String depart,String goback, String adult,String child) {
        AirlineApi airlineApi = new AirlineApi();

        return airlineApi.airlineLookup(from, to, depart, goback,adult,child);
    }
}
