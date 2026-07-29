package com.backend.service.impl;

import com.backend.dtos.common.response.*;
import com.backend.dtos.common.request.*;
import com.backend.entities.*;
import com.backend.exception.*;
import com.backend.repository.*;
import com.backend.service.*;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserServiceImpl implements UserService {

    private final AppUserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    @Transactional
    public AppUserDto registerUser(CreateUserRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new DuplicateResourceException("User already exists with email: " + request.getEmail());
        }

        AppUser user = AppUser.builder()
                .email(request.getEmail())
                .passwordHash(request.getPassword())
                .displayName(request.getDisplayName())
                .build();

        AppUser savedUser = userRepository.save(user);
        return modelMapper.map(savedUser, AppUserDto.class);
    }

    @Override
    public AppUserDto getUserById(String id) {
        AppUser user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with ID: " + id, null));
        return modelMapper.map(user, AppUserDto.class);
    }

    @Override
    public AppUserDto getUserByEmail(String email) {
        AppUser user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email, null));
        return modelMapper.map(user, AppUserDto.class);
    }

    @Override
    @Transactional
    public AppUserDto updateUserProfile(String id, String displayName) {
        AppUser user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with ID: " + id, null));

        user.setDisplayName(displayName);
        return modelMapper.map(user, AppUserDto.class);
    }

    @Override
    public List<AppUserDto> getAllUsers() {
        return userRepository.findAll().stream()
                .map(user -> modelMapper.map(user, AppUserDto.class))
                .toList();
    }
}
