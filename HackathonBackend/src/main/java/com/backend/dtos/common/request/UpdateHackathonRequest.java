package com.backend.dtos.common.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateHackathonRequest {

    @NotBlank(message = "Hackathon name is required")
    private String name;

    @NotNull(message = "Start date/time is required")
    private LocalDateTime startsAt;

    @NotNull(message = "Submission deadline is required")
    private LocalDateTime submissionDeadline;
}
