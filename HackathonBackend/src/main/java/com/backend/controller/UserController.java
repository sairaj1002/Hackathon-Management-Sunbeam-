package com.backend.controller;

import com.backend.dtos.common.request.*;
import com.backend.dtos.common.response.*;
import com.backend.service.*;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<AppUserDto> registerUser(@Valid @RequestBody CreateUserRequest request) {
        AppUserDto createdUser = userService.registerUser(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AppUserDto> getUserById(@PathVariable String id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @GetMapping("/email")
    public ResponseEntity<AppUserDto> getUserByEmail(@RequestParam String email) {
        return ResponseEntity.ok(userService.getUserByEmail(email));
    }

    @PutMapping("/{id}/profile")
    public ResponseEntity<AppUserDto> updateUserProfile(@PathVariable String id, @RequestParam String displayName) {
        return ResponseEntity.ok(userService.updateUserProfile(id, displayName));
    }

    @GetMapping
    public ResponseEntity<List<AppUserDto>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
}
