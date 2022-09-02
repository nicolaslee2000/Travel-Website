package com.teamapp.travelsite.User.OAuthPayload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class SignUpRequest {
	@NotBlank
	@Pattern(regexp = "^[가-힣]{2,5}$", message = "이름은 2자리 이상, 5자리 이하 한글이어야 합니다.")
	private String name;

	@NotBlank
	@Email
	private String email;

	@NotBlank
	@Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z])(?=\\S+$).{6,20}", message = "비밀번호는 숫자와 문자를 포함하여 6자리 이상으로 작성되어야 합니다.")
	private String password;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
