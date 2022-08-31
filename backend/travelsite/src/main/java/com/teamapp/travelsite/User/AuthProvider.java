package com.teamapp.travelsite.User;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AuthProvider {
    local,
    facebook,
    google
}
