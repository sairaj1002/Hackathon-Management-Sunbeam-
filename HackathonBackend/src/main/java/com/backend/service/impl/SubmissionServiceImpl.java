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

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SubmissionServiceImpl implements SubmissionService {

    private final SubmissionRepository submissionRepository;
    private final TeamRepository teamRepository;
    private final TeamMemberRepository teamMemberRepository;
    private final ModelMapper modelMapper;

    @Override
    @Transactional
    public SubmissionDto upsertSubmission(String teamId, UpsertSubmissionRequest request, String requestingUserId) {
        Team team = teamRepository.findById(teamId)
                .orElseThrow(() -> new ResourceNotFoundException("Team not found with ID: " + teamId, null));

        if (LocalDateTime.now().isAfter(team.getHackathon().getSubmissionDeadline())) {
            throw new BusinessRuleException("Submission deadline for this hackathon has passed.");
        }

        teamMemberRepository.findById(new TeamMemberId(teamId, requestingUserId))
                .orElseThrow(() -> new UnauthorizedAccessException("Only active team members can modify submissions."));

        Submission submission = submissionRepository.findByTeamId(teamId)
                .orElseGet(() -> Submission.builder()
                        .team(team)
                        .status("DRAFT")
                        .build());

        submission.setRepositoryUrl(request.getRepositoryUrl());
        submission.setDemoUrl(request.getDemoUrl());
        submission.setDescription(request.getDescription());

        return modelMapper.map(submissionRepository.save(submission), SubmissionDto.class);
    }

    @Override
    @Transactional
    public SubmissionDto updateSubmissionStatus(String teamId, String status, String requestingUserId) {
        Team team = teamRepository.findById(teamId)
                .orElseThrow(() -> new ResourceNotFoundException("Team not found with ID: " + teamId, null));

        if (LocalDateTime.now().isAfter(team.getHackathon().getSubmissionDeadline())) {
            throw new BusinessRuleException("Submission deadline for this hackathon has passed.");
        }

        teamMemberRepository.findById(new TeamMemberId(teamId, requestingUserId))
                .orElseThrow(() -> new UnauthorizedAccessException("Only team members can alter submission status."));

        Submission submission = submissionRepository.findByTeamId(teamId)
                .orElseThrow(() -> new ResourceNotFoundException("No submission exists for this team to submit.", null));

        submission.setStatus(status);
        return modelMapper.map(submissionRepository.save(submission), SubmissionDto.class);
    }

    @Override
    public SubmissionDto getSubmissionByTeamId(String teamId) {
        Submission submission = submissionRepository.findByTeamId(teamId)
                .orElseThrow(() -> new ResourceNotFoundException("No submission found for team ID: " + teamId, null));
        return modelMapper.map(submission, SubmissionDto.class);
    }

    @Override
    public SubmissionDto getSubmissionById(String submissionId) {
        Submission submission = submissionRepository.findById(submissionId)
                .orElseThrow(() -> new ResourceNotFoundException("Submission not found with ID: " + submissionId, null));
        return modelMapper.map(submission, SubmissionDto.class);
    }

    @Override
    public List<SubmissionDto> getSubmittedProjectsForHackathon(String hackathonId) {
        return submissionRepository.findSubmittedByHackathonId(hackathonId).stream()
                .map(s -> modelMapper.map(s, SubmissionDto.class))
                .toList();
    }
}
