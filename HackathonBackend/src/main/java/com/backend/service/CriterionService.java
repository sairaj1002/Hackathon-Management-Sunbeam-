package com.backend.service;

import com.backend.dtos.common.response.*;
import com.backend.dtos.common.request.*;

import java.util.List;


public interface CriterionService {
    CriterionDto createCriterion(String hackathonId, CreateCriterionRequest request);
    CriterionDto updateCriterion(String criterionId, UpdateCriterionRequest request);
    List<CriterionDto> getCriteriaByHackathon(String hackathonId);
    void deleteCriterion(String criterionId);
}
