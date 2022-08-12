package com.teamapp.travelsite.Security.OAuthBody;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;



public class SignUpMailRequest {
 

    @NotBlank
    @Email
    private String email;


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
   
}
