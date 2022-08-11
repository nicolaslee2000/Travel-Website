package com.teamapp.travelsite.Traveler;

import com.teamapp.travelsite.DTOs.TravelerDTO;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/*대충 생각나는대로 일단 써보겠습니다. CRUD부터
오늘은 메서드 구현보단 구상만 먼저 해볼게요.
내일 컨디션 괜찮아지는대로 구현하도록 하겠습니다.
 */

//traveler는 email 컬럼과 매핑되어있습니다 findByEmail 이 기본 조회 메서드 일것입니다.
@RestController
@RequestMapping("/traveler")
public class TravelerController {

    @PostMapping("/reg")//등록
    public String registerTraveler(){ //아무튼 뭔가를 받아올거임
        //짧으면 여기다 쓰고 아니면 서비스에 구현
        TravelerDTO travelerDTO;
        return "RegComplete";
        //아무튼 try catch 문 어쨌든 결과따라 Model attribute
        //괜찮으면 Model에 url이랑 메시지 담아서 TravelerList 조회 페이지로 리턴
    }

    @PostMapping("/{id}") //조회 (단일)
    public String showTraveler(@PathVariable String email, Model model){ //뭔가를 받아올것임 //RequestParam도 고려
                        //아무튼 여기서 리포지토리에 조회 쿼리를 날릴것임
        Traveler traveler = new Traveler(); //오류방지 깡통 객체

        model.addAttribute("email", email);
        model.addAttribute("traveler", traveler);

        return null; //Traveler 정보를 리턴할것임, 모델에 담아서
    }

    @GetMapping("/{id}/list") //조회 (페이징) //리스트가 아닌 페이징 객체로 구현하는것도 고려할것
    public List<Traveler> showTravelerList(@RequestParam("id") String id ){
        List<Traveler> travelerList = new ArrayList<>(); //오류방지 깡통 객체
        Traveler traveler = new Traveler();

        travelerList.add(traveler);
        //리스트를 통째로 리턴할까 모델에 담아서 리턴할까
        return travelerList;
    }

    //하단에 무조건  UPDATE 구현할것.
    //Delete 는삭제 플래그 컬럼이 아닌 정석대로 delete 쿼리를 직접 날리는것으로.

}
