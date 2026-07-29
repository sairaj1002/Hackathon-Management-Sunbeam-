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
@RequestMapping("/api/teams")
@RequiredArgsConstructor
public class TeamController {

    private final TeamService teamService;

    @PostMapping
    public ResponseEntity<TeamDto> createTeam(
            @Valid @RequestBody CreateTeamRequest request,
            @RequestHeader("X-User-Id") String creatorUserId) {
        TeamDto createdTeam = teamService.createTeam(request, creatorUserId);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTeam);
    }

    @PostMapping("/join")
    public ResponseEntity<TeamDto> joinTeam(
            @Valid @RequestBody JoinTeamRequest request,
            @RequestHeader("X-User-Id") String userId) {
        return ResponseEntity.ok(teamService.joinTeam(request, userId));
    }

    @DeleteMapping("/{teamId}/members/{targetUserId}")
    public ResponseEntity<Void> removeTeamMember(
            @PathVariable String teamId,
            @PathVariable String targetUserId,
            @RequestHeader("X-User-Id") String requestingUserId) {
        teamService.removeTeamMember(teamId, targetUserId, requestingUserId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{teamId}")
    public ResponseEntity<TeamDto> getTeamById(@PathVariable String teamId) {
        return ResponseEntity.ok(teamService.getTeamById(teamId));
    }

    @GetMapping("/invite/{inviteCode}")
    public ResponseEntity<TeamDto> getTeamByInviteCode(@PathVariable String inviteCode) {
        return ResponseEntity.ok(teamService.getTeamByInviteCode(inviteCode));
    }

    @GetMapping("/hackathon/{hackathonId}")
    public ResponseEntity<List<TeamDto>> getTeamsByHackathon(@PathVariable String hackathonId) {
        return ResponseEntity.ok(teamService.getTeamsByHackathon(hackathonId));
    }
}
