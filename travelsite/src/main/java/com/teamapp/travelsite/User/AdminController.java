package com.teamapp.travelsite.User;

import org.springframework.data.domain.Page;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminController {
    private UserService userService;




    @RequestMapping("/lookup")
    public String list(Model model, @RequestParam(value="page", defaultValue="0") int page) {
        Page<User> paging = this.userService.getList(page);
        model.addAttribute("paging", paging);
        return "user_list";
    } //페이징 처리 연습용


}
