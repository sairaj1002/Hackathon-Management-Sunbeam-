package com.backend.service;

import com.backend.dtos.common.response.*;
import com.backend.dtos.common.request.*;

import java.util.List;

public interface HackathonService {
    HackathonDto createHackathon(CreateHackathonRequest request);
    HackathonDto updateHackathon(String id, UpdateHackathonRequest request);
    HackathonDto getHackathonById(String id);
    List<HackathonDto> getAllHackathons();
    List<HackathonDto> getOngoingHackathons();
    void deleteHackathon(String id);
}
