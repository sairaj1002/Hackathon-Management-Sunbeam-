package com.backend.controller;

import com.backend.dtos.common.response.*;
import com.backend.service.*;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
@RequiredArgsConstructor
public class RoleController {

    private final RoleService roleService;

    @GetMapping("/{id}")
    public ResponseEntity<RoleDto> getRoleById(@PathVariable Short id) {
        return ResponseEntity.ok(roleService.getRoleById(id));
    }

    @GetMapping("/search")
    public ResponseEntity<RoleDto> getRoleByName(@RequestParam String name) {
        return ResponseEntity.ok(roleService.getRoleByName(name));
    }

    @GetMapping
    public ResponseEntity<List<RoleDto>> getAllRoles() {
        return ResponseEntity.ok(roleService.getAllRoles());
    }
}
