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

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class HackathonServiceImpl implements HackathonService {

    private final HackathonRepository hackathonRepository;
    private final ModelMapper modelMapper;

    @Override
    @Transactional
    public HackathonDto createHackathon(CreateHackathonRequest request) {
        if (request.getSubmissionDeadline().isBefore(request.getStartsAt())) {
            throw new BusinessRuleException("Submission deadline must be set after hackathon start date.");
        }

        Hackathon hackathon = Hackathon.builder()
                .name(request.getName())
                .startsAt(request.getStartsAt())
                .submissionDeadline(request.getSubmissionDeadline())
                .build();

        return modelMapper.map(hackathonRepository.save(hackathon), HackathonDto.class);
    }

    @Override
    @Transactional
    public HackathonDto updateHackathon(String id, UpdateHackathonRequest request) {
        Hackathon hackathon = hackathonRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Hackathon not found with ID: " + id, null));

        if (request.getSubmissionDeadline().isBefore(request.getStartsAt())) {
            throw new BusinessRuleException("Submission deadline must be set after hackathon start date.");
        }

        hackathon.setName(request.getName());
        hackathon.setStartsAt(request.getStartsAt());
        hackathon.setSubmissionDeadline(request.getSubmissionDeadline());

        return modelMapper.map(hackathon, HackathonDto.class);
    }

    @Override
    public HackathonDto getHackathonById(String id) {
        Hackathon hackathon = hackathonRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Hackathon not found with ID: " + id, null));
        return modelMapper.map(hackathon, HackathonDto.class);
    }

    @Override
    public List<HackathonDto> getAllHackathons() {
        return hackathonRepository.findAll().stream()
                .map(h -> modelMapper.map(h, HackathonDto.class))
                .toList();
    }

    @Override
    public List<HackathonDto> getOngoingHackathons() {
        return hackathonRepository.findOngoingHackathons(LocalDateTime.now()).stream()
                .map(h -> modelMapper.map(h, HackathonDto.class))
                .toList();
    }

    @Override
    @Transactional
    public void deleteHackathon(String id) {
        if (!hackathonRepository.existsById(id)) {
            throw new ResourceNotFoundException("Hackathon not found with ID: " + id, null);
        }
        hackathonRepository.deleteById(id);
    }
}
