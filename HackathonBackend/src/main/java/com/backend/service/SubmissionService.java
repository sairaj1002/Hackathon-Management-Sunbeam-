package com.backend.service;

import com.backend.dtos.common.response.*;
import com.backend.dtos.common.request.*;

import java.util.List;

public interface SubmissionService {
    SubmissionDto upsertSubmission(String teamId, UpsertSubmissionRequest request, String requestingUserId);
    SubmissionDto updateSubmissionStatus(String teamId, String status, String requestingUserId);
    SubmissionDto getSubmissionByTeamId(String teamId);
    SubmissionDto getSubmissionById(String submissionId);
    List<SubmissionDto> getSubmittedProjectsForHackathon(String hackathonId);
}
