package com.backend.controller;

import com.backend.dtos.common.request.*;
import com.backend.dtos.common.response.*;
import com.backend.service.*;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/submissions")
@RequiredArgsConstructor
public class SubmissionController {

    private final SubmissionService submissionService;

    @PutMapping("/team/{teamId}")
    public ResponseEntity<SubmissionDto> upsertSubmission(
            @PathVariable String teamId,
            @Valid @RequestBody UpsertSubmissionRequest request,
            @RequestHeader("X-User-Id") String requestingUserId) {
        return ResponseEntity.ok(submissionService.upsertSubmission(teamId, request, requestingUserId));
    }

    @PatchMapping("/team/{teamId}/status")
    public ResponseEntity<SubmissionDto> updateSubmissionStatus(
            @PathVariable String teamId,
            @RequestParam String status,
            @RequestHeader("X-User-Id") String requestingUserId) {
        return ResponseEntity.ok(submissionService.updateSubmissionStatus(teamId, status, requestingUserId));
    }

    @GetMapping("/team/{teamId}")
    public ResponseEntity<SubmissionDto> getSubmissionByTeamId(@PathVariable String teamId) {
        return ResponseEntity.ok(submissionService.getSubmissionByTeamId(teamId));
    }

    @GetMapping("/{submissionId}")
    public ResponseEntity<SubmissionDto> getSubmissionById(@PathVariable String submissionId) {
        return ResponseEntity.ok(submissionService.getSubmissionById(submissionId));
    }

    @GetMapping("/hackathon/{hackathonId}")
    public ResponseEntity<List<SubmissionDto>> getSubmittedProjectsForHackathon(@PathVariable String hackathonId) {
        return ResponseEntity.ok(submissionService.getSubmittedProjectsForHackathon(hackathonId));
    }
}
