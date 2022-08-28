package com.teamapp.travelsite.Service.impl;

import com.amadeus.exceptions.NotFoundException;
import com.teamapp.travelsite.Exception.NotFoundExceptionMessage;
import com.teamapp.travelsite.Exception.UserNotFoundException;
import com.teamapp.travelsite.Model.DTOs.UserDTO;
import com.teamapp.travelsite.Model.Entity.User;
import com.teamapp.travelsite.Model.Repository.UserRepository;
import com.teamapp.travelsite.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManagerFactory;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@EnableJpaRepositories
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    public User create(long id, String name, String email, String password) {
        User user = new User();
        user.setId(id);
        user.setName(name);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password)); //암호화 Spring Security 메서드
        this.userRepository.save(user); //Create Entity In DB
        return user;
    }

    @Deprecated
    public Page<User> getList(int page) {
        List<Sort.Order> sorts = new ArrayList<>();
        sorts.add(Sort.Order.desc("createDate"));
        Pageable pageable = PageRequest.of(page, 10, Sort.by(sorts));
        return this.userRepository.findAll(pageable);
    }

    public User getUser(String name) {
        Optional<User> user = this.userRepository.findByName(name);
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new UserNotFoundException("user not found");
        }
    }

    @Override
    public User findUserByEmail(String email) {
        Optional<User> byEmail = this.userRepository.findByEmail(email);
        if (byEmail.isPresent()) {
            return byEmail.get();
        } else throw new NotFoundExceptionMessage("user Not found");

    }

    @Override
    public User findUserByUserId(int id) {
        Optional<User> byId = this.userRepository.findById(Long.valueOf(id));
        if (byId.isPresent()) {
            return byId.get();
        } else throw new UserNotFoundException("User Not Founded");
    }

    @Override
    public void saveUpdatedUser(User user) throws Exception {

    }

    @Override
    public boolean deleteUser(int id) throws Exception {
        return false;
    }

    @Override
    public boolean isUserSaved(Long id, String userEmail) throws Exception {
        return false;
    }

    public List<UserDTO> showAllUsers() {
       List<User> userList = userRepository.findAll();
       List<UserDTO> userDTOList = new ArrayList<>();
        userList.forEach(e -> userDTOList.add(e.of(e)));
        return userDTOList;

        //test for USERDTO in id
    }


}
