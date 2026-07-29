package com.backend.service;

import com.backend.dtos.common.response.*;
import com.backend.dtos.common.request.*;

import java.util.List;

public interface ScoreService {
    ScoreDto submitOrUpdateScore(String judgeUserId, String submissionId, SubmitScoreRequest request);
    List<ScoreDto> getScoresForSubmission(String submissionId);
    List<ScoreDto> getScoresByJudgeForSubmission(String judgeUserId, String submissionId);
    void clearScoreForCriterion(String judgeUserId, String submissionId, String criterionId);
    List<LeaderboardEntryDto> getHackathonLeaderboard(String hackathonId);
}
