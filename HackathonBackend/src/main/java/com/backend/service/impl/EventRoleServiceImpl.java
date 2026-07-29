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

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class EventRoleServiceImpl implements EventRoleService {

    private final EventRoleRepository eventRoleRepository;
    private final AppUserRepository userRepository;
    private final HackathonRepository hackathonRepository;
    private final RoleRepository roleRepository;
    private final ModelMapper modelMapper;

    @Override
    @Transactional
    public EventRoleDto assignEventRole(AssignEventRoleRequest request) {
        AppUser user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found with ID: " + request.getUserId(), null));

        Hackathon hackathon = hackathonRepository.findById(request.getHackathonId())
                .orElseThrow(() -> new ResourceNotFoundException("Hackathon not found with ID: " + request.getHackathonId(), null));

        Role role = roleRepository.findById(request.getRoleId())
                .orElseThrow(() -> new ResourceNotFoundException("Role not found with ID: " + request.getRoleId(), null));

        EventRoleId id = new EventRoleId(user.getId(), hackathon.getId(), role.getId());

        EventRole eventRole = EventRole.builder()
                .id(id)
                .user(user)
                .hackathon(hackathon)
                .role(role)
                .build();

        return modelMapper.map(eventRoleRepository.save(eventRole), EventRoleDto.class);
    }

    @Override
    @Transactional
    public void revokeEventRole(String userId, String hackathonId, Short roleId) {
        EventRoleId id = new EventRoleId(userId, hackathonId, roleId);
        if (!eventRoleRepository.existsById(id)) {
            throw new ResourceNotFoundException("Event role assignment not found.", null);
        }
        eventRoleRepository.deleteById(id);
    }

    @Override
    public List<EventRoleDto> getRolesForUser(String userId) {
        return eventRoleRepository.findByIdUserId(userId).stream()
                .map(er -> modelMapper.map(er, EventRoleDto.class))
                .toList();
    }

    @Override
    public List<EventRoleDto> getRolesForHackathon(String hackathonId) {
        return eventRoleRepository.findByIdHackathonId(hackathonId).stream()
                .map(er -> modelMapper.map(er, EventRoleDto.class))
                .toList();
    }

    @Override
    public boolean userHasRoleInHackathon(String userId, String hackathonId, String roleName) {
        return eventRoleRepository.userHasRoleInHackathon(userId, hackathonId, roleName);
    }
}
