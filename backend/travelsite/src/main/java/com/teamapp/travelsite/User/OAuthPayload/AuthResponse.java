package com.teamapp.travelsite.User.OAuthPayload;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class AuthResponse {
    private String accessToken;
    private String tokenType = "Bearer";

    private String email;

    //JWT 사용한다.

    //1. 여기서 돌려주기.(백엔드 수정)

    //2. 로그인 폼에서 요청 끝나고 뽑아오기. (프론트 수정)

    public AuthResponse(String accessToken, String email) {
        this.accessToken = accessToken;
        this.email = email;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }
}
