package com.teamapp.travelsite.Controller;


import com.teamapp.travelsite.Exception.NotFoundExceptionMessage;
import com.teamapp.travelsite.Model.DTOs.TicketOrderDTO;
import com.teamapp.travelsite.Model.DTOs.TravelerDTO;
import com.teamapp.travelsite.Model.DTOs.UserDTO;
import com.teamapp.travelsite.Service.impl.OrdermanagementServiceImpl;
import lombok.SneakyThrows;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderManagementController {
	@Autowired
    OrdermanagementServiceImpl ordermanagementService;

    @SneakyThrows
    @PostMapping("/create")
    public String createTraveler(@RequestBody TicketOrderDTO ticketOrderDTO) {
        //if cannot receve TravelerDTO, Maybe we would be make Request Class.
    	System.out.println(ticketOrderDTO);
    	
        //receve user info maybe least userID(Long), InnerObj
    	
    	UserDTO userDto = new UserDTO();
    	userDto.setId(Long.valueOf(ticketOrderDTO.getUserId()));
    	ticketOrderDTO.setUserDTO(userDto);
//    	ticketOrderDTO.setTravelerDTO(new TravelerDTO());
    	System.out.println(ticketOrderDTO);
    	System.out.println(1);
    	userDto.toEntity(userDto);
    	System.out.println(2);
        Long savedId =ordermanagementService.createTicketOrder(ticketOrderDTO);
        System.out.println(3);
        if (ordermanagementService.isOrderSaved(savedId)) {
            return "Saved Complete your order num is :" + savedId;
        } else {
            return "Not Saved";
        }
    }
    @GetMapping("/") //read //userid
    public List<TicketOrderDTO> showOrder(@RequestParam Long id) {
        return ordermanagementService.findTicketOrderByUserId(id);
    }
    @PostMapping("/update")
    public String updateOrder(@RequestBody TicketOrderDTO ticketOrderDTO) throws Exception {
        Long savedId = ordermanagementService.saveUpdatedOrder(ticketOrderDTO);
        if (ordermanagementService.isOrderSaved(savedId)) {
            return "update Complete your order num is :" + savedId;
        }else throw new NotFoundExceptionMessage("Not founded");
    }

    @GetMapping("/delete")
    public String deleteOrder(@RequestParam Long id) throws Exception{
        ordermanagementService.deleteOrder(id);
        if (!ordermanagementService.isOrderSaved(id)) {
            return " delete complete" + id;
        } else throw new RuntimeException("maybe not deleted");
    }


}
