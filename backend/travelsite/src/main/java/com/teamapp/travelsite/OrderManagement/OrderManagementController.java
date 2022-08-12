package com.teamapp.travelsite.OrderManagement;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
public class OrderManagementController {
    OrdermanagementService ordermanagementService;

    @Deprecated
    @GetMapping("/creationTest")
    public void OrderCreateTest() {
        //given

        //when

        //then

    }


}
