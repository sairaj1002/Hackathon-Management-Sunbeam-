package com.backend.security;

import com.backend.dtos.common.request.*;
import com.backend.dtos.common.response.*;
import com.backend.exception.*;
import com.backend.service.*;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService userDetailsService;

    @Override
    public AuthResponse register(CreateUserRequest request) {
        CreateUserRequest encodedRequest = new CreateUserRequest(
                request.getEmail(),
                passwordEncoder.encode(request.getPassword()),
                request.getDisplayName()
        );

        AppUserDto registeredUser = userService.registerUser(encodedRequest);
        CustomUserDetails userDetails = (CustomUserDetails) userDetailsService.loadUserByUsername(registeredUser.getEmail());
        String token = jwtUtil.generateToken(userDetails);

        return new AuthResponse(token, registeredUser);
    }

    @Override
    public AuthResponse login(LoginRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
        } catch (Exception e) {
            throw new BusinessRuleException("Invalid email or password.");
        }

        CustomUserDetails userDetails = (CustomUserDetails) userDetailsService.loadUserByUsername(request.getEmail());
        String token = jwtUtil.generateToken(userDetails);
        AppUserDto userDto = userService.getUserByEmail(request.getEmail());

        return new AuthResponse(token, userDto);
    }
}
