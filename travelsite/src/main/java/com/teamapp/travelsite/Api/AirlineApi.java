package com.teamapp.travelsite.Api;

import com.teamapp.travelsite.AirlineBooking.AirlineVO;
import java.util.HashMap;

public class AirlineApi {
    private AirlineVO airlineVO = new AirlineVO();
    public HashMap<String, AirlineVO> airlineLookup(String arrival, String destination, String depart, String goback,String adult,String child) {
         //기본을 전체로 조회할것 //기본 검색 결과수 제한할것
        HashMap<String,AirlineVO> airlineMap = new HashMap<String,AirlineVO>();
        //api 리스트 조회 구현 / api로 보내서 리턴된 gson 파싱후 해시맵 리턴까지 작성.


        return airlineMap;
    }
}
