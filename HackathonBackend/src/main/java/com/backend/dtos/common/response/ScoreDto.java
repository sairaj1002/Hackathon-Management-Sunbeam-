package com.backend.dtos.common.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScoreDto {
    private String judgeUserId;
    private String submissionId;
    private CriterionDto criterion;
    private Integer score;
    private String feedback;
}
