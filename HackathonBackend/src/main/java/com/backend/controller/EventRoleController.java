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
@RequestMapping("/api/event-roles")
@RequiredArgsConstructor
public class EventRoleController {

    private final EventRoleService eventRoleService;

    @PostMapping
    public ResponseEntity<EventRoleDto> assignEventRole(@Valid @RequestBody AssignEventRoleRequest request) {
        EventRoleDto assigned = eventRoleService.assignEventRole(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(assigned);
    }

    @DeleteMapping
    public ResponseEntity<Void> revokeEventRole(
            @RequestParam String userId,
            @RequestParam String hackathonId,
            @RequestParam Short roleId) {
        eventRoleService.revokeEventRole(userId, hackathonId, roleId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<EventRoleDto>> getRolesForUser(@PathVariable String userId) {
        return ResponseEntity.ok(eventRoleService.getRolesForUser(userId));
    }

    @GetMapping("/hackathon/{hackathonId}")
    public ResponseEntity<List<EventRoleDto>> getRolesForHackathon(@PathVariable String hackathonId) {
        return ResponseEntity.ok(eventRoleService.getRolesForHackathon(hackathonId));
    }

    @GetMapping("/check")
    public ResponseEntity<Boolean> userHasRoleInHackathon(
            @RequestParam String userId,
            @RequestParam String hackathonId,
            @RequestParam String roleName) {
        return ResponseEntity.ok(eventRoleService.userHasRoleInHackathon(userId, hackathonId, roleName));
    }
}
