package com.teamapp.travelsite.AirlineBooking;

import com.teamapp.travelsite.User.User;
import com.teamapp.travelsite.User.UserRepository;
import com.teamapp.travelsite.User.UserService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class UserFindTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;
    @Test
    void testUserFind(){
        //given
        final String username = "username";
        given(userRepository.findByusername(any())).willReturn(Optional.of(new User()));

         //when
        User user = userService.getUser(username);

        //then
        assertNotNull(user);

        }


    }


