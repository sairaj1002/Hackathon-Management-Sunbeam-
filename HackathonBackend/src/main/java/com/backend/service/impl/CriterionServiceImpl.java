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

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CriterionServiceImpl implements CriterionService {

    private final CriterionRepository criterionRepository;
    private final HackathonRepository hackathonRepository;
    private final ModelMapper modelMapper;

    @Override
    @Transactional
    public CriterionDto createCriterion(String hackathonId, CreateCriterionRequest request) {
        Hackathon hackathon = hackathonRepository.findById(hackathonId)
                .orElseThrow(() -> new ResourceNotFoundException("Hackathon not found with ID: " + hackathonId, null));

        if (request.getWeight() == null || request.getWeight().compareTo(BigDecimal.ZERO) <= 0) {
            throw new BusinessRuleException("Criterion weight must be greater than 0.");
        }

        Criterion criterion = Criterion.builder()
                .hackathon(hackathon)
                .name(request.getName())
                .weight(request.getWeight())
                .build();

        return modelMapper.map(criterionRepository.save(criterion), CriterionDto.class);
    }

    @Override
    @Transactional
    public CriterionDto updateCriterion(String criterionId, UpdateCriterionRequest request) {
        Criterion criterion = criterionRepository.findById(criterionId)
                .orElseThrow(() -> new ResourceNotFoundException("Criterion not found with ID: " + criterionId, null));

        if (request.getWeight() != null && request.getWeight().compareTo(BigDecimal.ZERO) <= 0) {
            throw new BusinessRuleException("Criterion weight must be greater than 0.");
        }

        criterion.setName(request.getName());
        criterion.setWeight(request.getWeight());

        return modelMapper.map(criterion, CriterionDto.class);
    }

    @Override
    public List<CriterionDto> getCriteriaByHackathon(String hackathonId) {
        return criterionRepository.findByHackathonId(hackathonId).stream()
                .map(c -> modelMapper.map(c, CriterionDto.class))
                .toList();
    }

    @Override
    @Transactional
    public void deleteCriterion(String criterionId) {
        if (!criterionRepository.existsById(criterionId)) {
            throw new ResourceNotFoundException("Criterion not found with ID: " + criterionId, null);
        }
        criterionRepository.deleteById(criterionId);
    }
}
