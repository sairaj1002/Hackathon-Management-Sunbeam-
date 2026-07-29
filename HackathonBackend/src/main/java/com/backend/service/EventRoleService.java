package com.backend.service;

import com.backend.dtos.common.response.*;
import com.backend.dtos.common.request.*;

import java.util.List;

public interface EventRoleService {
    EventRoleDto assignEventRole(AssignEventRoleRequest request);
    void revokeEventRole(String userId, String hackathonId, Short roleId);
    List<EventRoleDto> getRolesForUser(String userId);
    List<EventRoleDto> getRolesForHackathon(String hackathonId);
    boolean userHasRoleInHackathon(String userId, String hackathonId, String roleName);
}
