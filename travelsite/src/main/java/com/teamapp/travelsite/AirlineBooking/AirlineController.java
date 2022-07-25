package com.teamapp.travelsite.AirlineBooking;

import com.teamapp.travelsite.Api.AirlineApi;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;


@RestController
@RequestMapping(value = "/book")
public class AirlineController {
    private AirlineRepository AirlineRepository;
    AirlineVO airlineVO = new AirlineVO();
    AirlineApi airlineApi = new AirlineApi();
    AirlineServicempl airlineServicempl = new AirlineServicempl();

    @GetMapping("/") //항공권 조회 페이지
    public HashMap<String, AirlineVO> showBookingPage(){

        String from = null;
        String to = null;
        String depart = null;
        String goback = null;
        String adult = null;
        String child = null;


        return airlineServicempl.serachAirline(from, to, depart, goback,adult,child);
    }

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
//무한스크롤 혹은 페이징 처리 할것.
    //유저가 선택한 항공권만 DB에 저장장
    //메인 페이지에서 받은 데이터를 api로 보내 필터링 후 리턴
        //컨트롤러는 보통 길어지면 안되니까 서비스에서 호출해야할듯.
        //검색할 변수 default 지정
 */
