package com.teamapp.travelsite.AirlineBooking;

import com.teamapp.travelsite.Model.Entity.User;
import com.teamapp.travelsite.Model.Repository.UserRepository;
import com.teamapp.travelsite.Service.impl.UserServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.autoconfigure.AutoConfiguration;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;

@AutoConfiguration
@ExtendWith(MockitoExtension.class)
public class UserFindTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserServiceImpl userService;
    @Test
    void testUserFind(){
        //given
        final String username = "username";
        given(userRepository.findById(any())).willReturn(Optional.of(new User()));
        //when
        User user = userService.getUser(username);
        //then
        assertNotNull(user);
        }
    }


