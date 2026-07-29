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
@RequestMapping("/api/scores")
@RequiredArgsConstructor
public class ScoreController {

    private final ScoreService scoreService;

    @PostMapping("/submission/{submissionId}")
    public ResponseEntity<ScoreDto> submitOrUpdateScore(
            @PathVariable String submissionId,
            @Valid @RequestBody SubmitScoreRequest request,
            @RequestHeader("X-User-Id") String judgeUserId) {
        return ResponseEntity.ok(scoreService.submitOrUpdateScore(judgeUserId, submissionId, request));
    }

    @GetMapping("/submission/{submissionId}")
    public ResponseEntity<List<ScoreDto>> getScoresForSubmission(@PathVariable String submissionId) {
        return ResponseEntity.ok(scoreService.getScoresForSubmission(submissionId));
    }

    @GetMapping("/submission/{submissionId}/judge/{judgeUserId}")
    public ResponseEntity<List<ScoreDto>> getScoresByJudgeForSubmission(
            @PathVariable String judgeUserId,
            @PathVariable String submissionId) {
        return ResponseEntity.ok(scoreService.getScoresByJudgeForSubmission(judgeUserId, submissionId));
    }

    @DeleteMapping("/submission/{submissionId}/criterion/{criterionId}")
    public ResponseEntity<Void> clearScoreForCriterion(
            @PathVariable String submissionId,
            @PathVariable String criterionId,
            @RequestHeader("X-User-Id") String judgeUserId) {
        scoreService.clearScoreForCriterion(judgeUserId, submissionId, criterionId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/leaderboard/hackathon/{hackathonId}")
    public ResponseEntity<List<LeaderboardEntryDto>> getHackathonLeaderboard(@PathVariable String hackathonId) {
        return ResponseEntity.ok(scoreService.getHackathonLeaderboard(hackathonId));
    }
}
