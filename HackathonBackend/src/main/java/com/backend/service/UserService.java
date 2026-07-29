package com.backend.service;


import com.backend.dtos.common.response.*;
import com.backend.dtos.common.request.*;

import java.util.List;

public interface UserService {
    AppUserDto registerUser(CreateUserRequest request);
    AppUserDto getUserById(String id);
    AppUserDto getUserByEmail(String email);
    AppUserDto updateUserProfile(String id, String displayName);
    List<AppUserDto> getAllUsers();
}
