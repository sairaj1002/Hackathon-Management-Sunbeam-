package com.backend.dtos.common.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LeaderboardEntryDto {
    private String teamId;
    private String teamName;
    private String submissionId;
    private Double totalScore;
}
