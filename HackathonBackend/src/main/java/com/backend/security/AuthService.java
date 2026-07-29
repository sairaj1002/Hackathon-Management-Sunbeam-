package com.backend.security;

import com.backend.dtos.common.request.*;
import com.backend.dtos.common.response.*;

public interface AuthService {
    AuthResponse register(CreateUserRequest request);
    AuthResponse login(LoginRequest request);
}
