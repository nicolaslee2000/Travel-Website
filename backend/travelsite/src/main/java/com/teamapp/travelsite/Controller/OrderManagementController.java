package com.teamapp.travelsite.Controller;


import com.teamapp.travelsite.Service.impl.OrdermanagementServiceImpl;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
public class OrderManagementController {
    OrdermanagementServiceImpl ordermanagementService;

    @Deprecated
    @GetMapping("/creationTest")
    public void OrderCreateTest() {
        //given

        //when

        //then

    }


}
