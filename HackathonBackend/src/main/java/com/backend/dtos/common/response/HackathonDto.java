package com.backend.dtos.common.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HackathonDto {
    private String id;
    private String name;
    private LocalDateTime startsAt;
    private LocalDateTime submissionDeadline;
}
