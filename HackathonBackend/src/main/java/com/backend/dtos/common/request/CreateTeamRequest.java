package com.backend.dtos.common.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CreateTeamRequest {

    @NotBlank(message = "Hackathon ID is required")
    private String hackathonId;

    @NotBlank(message = "Team name is required")
    private String name;

    @NotNull(message = "Max team size is required")
    @Min(value = 1, message = "Team size must be at least 1")
    private Integer maxSize;

}
