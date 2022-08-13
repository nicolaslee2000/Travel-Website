package com.teamapp.travelsite.Security;



import com.teamapp.travelsite.Exception.ResourceNotFoundException;
import com.teamapp.travelsite.Model.Repository.TempMailRepository;
import com.teamapp.travelsite.Model.Repository.UserRepository;
import com.teamapp.travelsite.User.TempMail;
import com.teamapp.travelsite.User.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@EnableJpaRepositories("com.teamapp.travelsite.Repository")
@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;
    
    @Autowired
	TempMailRepository tempMailRepository;

	@Autowired
	private JavaMailSender mailSender;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found with email : " + email)
        );
        return UserPrincipal.create(user);
    }
    @Transactional
    public UserDetails loadUserById(Long id) {
        User user = userRepository.findById(id).orElseThrow(
            () -> new ResourceNotFoundException("User", "id", id)
        );

        return UserPrincipal.create(user);
    }
    public void sendEmail(String email, String key) {
		MimeMessagePreparator messagePreparator = mimeMessage -> {
			final MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
			 // true는 멀티파트 메세지를 사용하겠다는 의미
			
			String htmlStr = "<a href=http://localhost:8090/auth/emailconfirmed?userEmail=" + email + "&authKey=" + key + ">이메일 인증 확인</a>";
			
			helper.setTo(email);
			helper.setSubject("[😀😀] Travel_Website 회원가입 인증메일입니다.");
			helper.setText("안녕하세요 Travel_Website입니다. 회원가입에 동의하시면 인증 확인 버튼을 눌러주세요  " + htmlStr,true);
			// true는 html을 사용하겠다는 의미
		};
		mailSender.send(messagePreparator);
	}
	
	@Transactional
	public void mailAuth(String userEmail, String authKey) throws Exception {
		TempMail tempMail = tempMailRepository.findByEmail(userEmail) 
				.orElseThrow(() -> new UsernameNotFoundException("User not found with email : " + userEmail));
		
		System.out.println("ser");
		System.out.println(authKey);
		System.out.println(tempMail.getEmailAuthKey());
		System.out.println(tempMail.getEmailAuth());
		
		if(authKey.equals(tempMail.getEmailAuthKey())) {
			tempMail.setEmailAuth(true);
		System.out.println(tempMail.getEmailAuth());
		}
	
	}
}