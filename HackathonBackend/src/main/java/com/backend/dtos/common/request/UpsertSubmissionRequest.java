package com.backend.dtos.common.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpsertSubmissionRequest {

    @NotBlank(message = "Repository URL is required")
    private String repositoryUrl;

    private String demoUrl;

    @NotBlank(message = "Project description is required")
    private String description;
}
