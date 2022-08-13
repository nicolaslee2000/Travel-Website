package com.teamapp.travelsite.User;

import com.teamapp.travelsite.Exception.UserNotFoundException;
import com.teamapp.travelsite.Model.Repository.UserRepository;
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
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final EntityManagerFactory entityManagerFactory;
    public User create(long id,String name, String email, String password) {
        User user = new User();
        user.setId(id);
        user.setName(name);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password)); //암호화 Spring Security 메서드
        this.userRepository.save(user); //Create Entity In DB
        return user;
    }

    public Page<User> getList(int page) {
        List<Sort.Order> sorts = new ArrayList<>();
        sorts.add(Sort.Order.desc("createDate"));
        Pageable pageable = PageRequest.of(page, 10, Sort.by(sorts));
        return this.userRepository.findAll(pageable);
    }

    public User getUser(String name) {
        Optional<User> user = this.userRepository.findByname(name);
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new UserNotFoundException("user not found");
        }

    }
}
