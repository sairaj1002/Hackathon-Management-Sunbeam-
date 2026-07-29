package com.backend.dtos.common.request;

import jakarta.validation.constraints.Future;
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
public class CreateHackathonRequest {

    @NotBlank(message = "Hackathon name is required")
    private String name;

    @NotNull(message = "Start date/time is required")
    private LocalDateTime startsAt;

    @NotNull(message = "Submission deadline is required")
    @Future(message = "Submission deadline must be in the future")
    private LocalDateTime submissionDeadline;
}
