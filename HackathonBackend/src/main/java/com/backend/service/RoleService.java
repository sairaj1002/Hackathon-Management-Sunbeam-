package com.backend.service;

import com.backend.dtos.common.response.*;

import java.util.List;

public interface RoleService {
    RoleDto getRoleById(Short id);
    RoleDto getRoleByName(String name);
    List<RoleDto> getAllRoles();
}
