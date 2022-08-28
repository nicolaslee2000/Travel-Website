package com.teamapp.travelsite.Model.Entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.teamapp.travelsite.Model.DTOs.UserDTO;
import com.teamapp.travelsite.User.AuthProvider;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@NoArgsConstructor
@Builder
@ToString
@AllArgsConstructor
@Entity
@Getter
@Setter
@Table(name = "USER_TABLE",uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")
})
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    private String imageUrl;

    @Enumerated(EnumType.STRING)
    private AuthProvider provider;

    private String providerId;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    @Column(nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-mm-dd")
    private java.util.Date createDate; //Timestamp

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    List<Traveler> traveler;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<TicketOrder> ticketOrders; //lombok @Builder 관련 경고 발생위치

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<TempMail> tempMails;

    @OneToMany(mappedBy = "creator", cascade = CascadeType.ALL)
    List<DirectMessage> directMessages;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<Member> members;


    public UserDTO of (User user) {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(user, UserDTO.class);
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    //계정이 갖고있는 권한 목록은 리턴
    @Override
    public Collection <? extends GrantedAuthority > getAuthorities() {

        Collection < GrantedAuthority > collectors = new ArrayList<>();
        collectors.add(() -> {
            return "계정별 등록할 권한";
        });

        //collectors.add(new SimpleGrantedAuthority("Role"));

        return collectors;
    }

    //계정이 만료되지 않았는지 리턴 (true: 만료 안됨)
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    //계정이 잠겨있는지 않았는지 리턴. (true: 잠기지 않음)
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    //비밀번호가 만료되지 않았는지 리턴한다. (true: 만료 안됨)
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    //계정이 활성화(사용가능)인지 리턴 (true: 활성화)
    @Override
    public boolean isEnabled() {
        return true;
    }
}

/*
    (strategy=GenerationType.IDENTITY) IDENTITY = AUTO_INCREMENT
    SEQUENCE (ORACLE, PostgreSQL, DB2, H2) order by sequence file or table
    TABLE :: Like sequence however create key building table (able ALL DB)
    AUTO :: auto (DEFAULT)
* */