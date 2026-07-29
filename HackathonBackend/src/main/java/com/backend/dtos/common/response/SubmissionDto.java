package com.backend.dtos.common.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SubmissionDto {
    private String id;
    private String teamId;
    private String repositoryUrl;
    private String demoUrl;
    private String description;
    private String status;
}
