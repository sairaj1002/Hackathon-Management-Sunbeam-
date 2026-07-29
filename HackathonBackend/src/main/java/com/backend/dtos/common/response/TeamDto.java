package com.backend.dtos.common.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import com.backend.entities.TeamMember;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TeamDto {
    private String id;
    private String name;
    private String inviteCode;
    private Integer maxSize;
    private String hackathon;
    private List<TeamMemberDto> members;
}
