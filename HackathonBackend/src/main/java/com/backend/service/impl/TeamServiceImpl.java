package com.backend.service.impl;

import com.backend.dtos.common.response.*;
import com.backend.dtos.common.request.*;
import com.backend.entities.*;
import com.backend.exception.*;
import com.backend.repository.*;
import com.backend.service.*;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TeamServiceImpl implements TeamService {

    private final TeamRepository teamRepository;
    private final TeamMemberRepository teamMemberRepository;
    private final HackathonRepository hackathonRepository;
    private final AppUserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    @Transactional
    public TeamDto createTeam(CreateTeamRequest request, String creatorUserId) {
        Hackathon hackathon = hackathonRepository.findById(request.getHackathonId())
                .orElseThrow(() -> new ResourceNotFoundException("Hackathon not found with ID: " + request.getHackathonId(), null));

        AppUser creator = userRepository.findById(creatorUserId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with ID: " + creatorUserId, null));

        if (teamRepository.existsByHackathonIdAndName(hackathon.getId(), request.getName())) {
            throw new DuplicateResourceException("Team name already exists in this hackathon.");
        }

        if (teamMemberRepository.existsByUserIdAndHackathonId(creatorUserId, hackathon.getId())) {
            throw new BusinessRuleException("User already belongs to a team in this hackathon.");
        }

        String inviteCode = UUID.randomUUID().toString().substring(0, 8).toUpperCase();

        Team team = Team.builder()
                .hackathon(hackathon)
                .name(request.getName())
                .inviteCode(inviteCode)
                .maxSize(request.getMaxSize())
                .build();

        Team savedTeam = teamRepository.save(team);

        TeamMember leadMember = TeamMember.builder()
                .id(new TeamMemberId(savedTeam.getId(), creator.getId()))
                .team(savedTeam)
                .user(creator)
                .isLead(true)
                .build();

        teamMemberRepository.save(leadMember);

        return modelMapper.map(savedTeam, TeamDto.class);
    }

    @Override
    @Transactional
    public TeamDto joinTeam(JoinTeamRequest request, String userId) {
        Team team = teamRepository.findByInviteCode(request.getInviteCode())
                .orElseThrow(() -> new ResourceNotFoundException("Invalid invite code. Team not found.", null));

        AppUser user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with ID: " + userId, null));

        if (teamMemberRepository.existsByUserIdAndHackathonId(userId, team.getHackathon().getId())) {
            throw new BusinessRuleException("User is already in a team for this hackathon.");
        }

        long currentMembersCount = teamRepository.countMembersByTeamId(team.getId());
        if (currentMembersCount >= team.getMaxSize()) {
            throw new BusinessRuleException("Team has reached its maximum size limit (" + team.getMaxSize() + ").");
        }

        TeamMember newMember = TeamMember.builder()
                .id(new TeamMemberId(team.getId(), user.getId()))
                .team(team)
                .user(user)
                .isLead(false)
                .build();

        teamMemberRepository.save(newMember);

        return modelMapper.map(team, TeamDto.class);
    }

    @Override
    @Transactional
    public void removeTeamMember(String teamId, String targetUserId, String requestingUserId) {
        TeamMember requestingMember = teamMemberRepository.findById(new TeamMemberId(teamId, requestingUserId))
                .orElseThrow(() -> new UnauthorizedAccessException("You are not a member of this team."));

        if (!requestingUserId.equals(targetUserId) && Boolean.FALSE.equals(requestingMember.getIsLead())) {
            throw new UnauthorizedAccessException("Only team leads can remove other members.");
        }

        TeamMemberId targetId = new TeamMemberId(teamId, targetUserId);
        if (!teamMemberRepository.existsById(targetId)) {
            throw new ResourceNotFoundException("Member not found in team.", null);
        }

        teamMemberRepository.deleteById(targetId);

        if (teamRepository.countMembersByTeamId(teamId) == 0) {
            teamRepository.deleteById(teamId);
        }
    }

    @Override
    public TeamDto getTeamById(String teamId) {
        Team team = teamRepository.findById(teamId)
                .orElseThrow(() -> new ResourceNotFoundException("Team not found with ID: " + teamId, null));
        TeamDto dto = modelMapper.map(team, TeamDto.class);
        List<TeamMemberDto> list = new ArrayList<TeamMemberDto>();
        teamMemberRepository.findByIdTeamId(teamId).forEach(tm -> {list.add(modelMapper.map(tm, TeamMemberDto.class));} );
        dto.setMembers(list);
        return dto;
    }

    @Override
    public TeamDto getTeamByInviteCode(String inviteCode) {
        Team team = teamRepository.findByInviteCode(inviteCode)
                .orElseThrow(() -> new ResourceNotFoundException("Team not found with invite code: " + inviteCode, null));
        return modelMapper.map(team, TeamDto.class);
    }

    @Override
    public List<TeamDto> getTeamsByHackathon(String hackathonId) {
        return teamRepository.findByHackathonId(hackathonId).stream()
                .map(t -> modelMapper.map(t, TeamDto.class))
                .toList();
    }
}
