package com.teamapp.travelsite.AirlineBooking;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping(value = "/book")
public class AirlineController {
    private AirlineRepository AirlineRepository;


    @GetMapping("/") //항공권 조회 페이지
    public String showBookingPage(){
        //List<Airline> AirlineList =
        return "";
    }

    //무한스크롤 혹은 페이징 처리 할것.


    @GetMapping("/{ID}") //항공권 상세 페이지
    public String showBookingDetail(){

     return"";
    }

    @GetMapping("/confirm") //항공권 확인 페이지
        public String showBookConfirm(Model model){
            //
        return "";
        }

}
/*
api 에 대한 이해.
 */
