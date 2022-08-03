package com.teamapp.travelsite.User;

import com.teamapp.travelsite.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    @GetMapping("/register")
    public String showRegister(UserCreateForm userCreateForm){
        return "가입폼";
    }

    @PostMapping("/signup")
    public String signup(@Valid UserCreateForm userCreateForm, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            return "signup_form";
        }

        if (!userCreateForm.getPassword1().equals(userCreateForm.getPassword2())) {
            bindingResult.rejectValue("password2","passwordInCorrect",
                    "2개의 패스워드가 일치하지 않습니다.");

            return "signup_form";
        }
        try {
            userService.create(userCreateForm.getId() ,userCreateForm.getName(),
                    userCreateForm.getEmail(), userCreateForm.getPassword1());
        }catch(DataIntegrityViolationException e) {
            e.printStackTrace();
            bindingResult.reject("signupFailed", "이미 등록된 사용자입니다.");
            return "signup_form";
        }catch(Exception e) {
            e.printStackTrace();
            bindingResult.reject("signupFailed", e.getMessage());
            return "signup_form";
        }



        userService.create(userCreateForm.getId(),userCreateForm.getName(), userCreateForm.getEmail()
                , userCreateForm.getPassword1()
        );

        return "redirect:/";
    }

    @GetMapping("/login")
    public String showLogin(){

        return "login_form";
    }




}
