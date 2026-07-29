package com.backend.service;

import com.backend.dtos.common.response.*;
import com.backend.dtos.common.request.*;


import java.util.List;

public interface TeamService {
    TeamDto createTeam(CreateTeamRequest request, String creatorUserId);
    TeamDto joinTeam(JoinTeamRequest request, String userId);
    void removeTeamMember(String teamId, String userId, String requestingUserId);
    TeamDto getTeamById(String teamId);
    TeamDto getTeamByInviteCode(String inviteCode);
    List<TeamDto> getTeamsByHackathon(String hackathonId);
}
