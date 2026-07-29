package com.backend.dtos.common.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AssignEventRoleRequest {

    @NotBlank(message = "User ID is required")
    private String userId;

    @NotBlank(message = "Hackathon ID is required")
    private String hackathonId;

    @NotNull(message = "Role ID is required")
    private Short roleId;
}
