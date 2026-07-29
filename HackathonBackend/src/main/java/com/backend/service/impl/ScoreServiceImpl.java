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
public class ScoreServiceImpl implements ScoreService {

    private final ScoreRepository scoreRepository;
    private final SubmissionRepository submissionRepository;
    private final CriterionRepository criterionRepository;
    private final AppUserRepository userRepository;
    private final EventRoleRepository eventRoleRepository;
    private final ModelMapper modelMapper;

    @Override
    @Transactional
    public ScoreDto submitOrUpdateScore(String judgeUserId, String submissionId, SubmitScoreRequest request) {
        AppUser judge = userRepository.findById(judgeUserId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with ID: " + judgeUserId, null));

        Submission submission = submissionRepository.findById(submissionId)
                .orElseThrow(() -> new ResourceNotFoundException("Submission not found with ID: " + submissionId, null));

        Criterion criterion = criterionRepository.findById(request.getCriterionId())
                .orElseThrow(() -> new ResourceNotFoundException("Criterion not found with ID: " + request.getCriterionId(), null));

        String hackathonId = submission.getTeam().getHackathon().getId();

        boolean isJudge = eventRoleRepository.userHasRoleInHackathon(judgeUserId, hackathonId, "JUDGE");
        if (!isJudge) {
            throw new UnauthorizedAccessException("User is not assigned as a JUDGE for this hackathon.");
        }

        if (!criterion.getHackathon().getId().equals(hackathonId)) {
            throw new BusinessRuleException("Selected criterion does not belong to the submission's hackathon.");
        }

        if (request.getScore() < 0 || request.getScore() > 10) {
            throw new BusinessRuleException("Score must be between 0 and 10.");
        }

        ScoreId scoreId = new ScoreId(judgeUserId, submissionId, request.getCriterionId());

        Score score = Score.builder()
                .id(scoreId)
                .judge(judge)
                .submission(submission)
                .criterion(criterion)
                .score(request.getScore())
                .feedback(request.getFeedback())
                .build();

        return modelMapper.map(scoreRepository.save(score), ScoreDto.class);
    }

    @Override
    public List<ScoreDto> getScoresForSubmission(String submissionId) {
        return scoreRepository.findByIdSubmissionId(submissionId).stream()
                .map(s -> modelMapper.map(s, ScoreDto.class))
                .toList();
    }

    @Override
    public List<ScoreDto> getScoresByJudgeForSubmission(String judgeUserId, String submissionId) {
        return scoreRepository.findByIdJudgeIdAndIdSubmissionId(judgeUserId, submissionId).stream()
                .map(s -> modelMapper.map(s, ScoreDto.class))
                .toList();
    }

    @Override
    @Transactional
    public void clearScoreForCriterion(String judgeUserId, String submissionId, String criterionId) {
        ScoreId scoreId = new ScoreId(judgeUserId, submissionId, criterionId);
        if (!scoreRepository.existsById(scoreId)) {
            throw new ResourceNotFoundException("Score entry not found.", null);
        }
        scoreRepository.deleteById(scoreId);
    }

    @Override
    public List<LeaderboardEntryDto> getHackathonLeaderboard(String hackathonId) {
        List<Object[]> rawResults = scoreRepository.getLeaderboardByHackathonId(hackathonId);

        return rawResults.stream().map(result -> {
            String submissionId = (String) result[0];
            Double averageScore = (Double) result[1];

            Submission submission = submissionRepository.findById(submissionId)
                    .orElseThrow(() -> new ResourceNotFoundException("Submission reference missing: " + submissionId, null));

            return new LeaderboardEntryDto(
                    submission.getTeam().getId(),
                    submission.getTeam().getName(),
                    submissionId,
                    averageScore != null ? Math.round(averageScore * 100.0) / 100.0 : 0.0
            );
        }).toList();
    }
}
