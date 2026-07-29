package com.backend.controller;

import com.backend.dtos.common.request.*;
import com.backend.dtos.common.response.*;
import com.backend.service.*;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/criteria")
@RequiredArgsConstructor
public class CriterionController {

    private final CriterionService criterionService;

    @PostMapping("/hackathon/{hackathonId}")
    public ResponseEntity<CriterionDto> createCriterion(
            @PathVariable String hackathonId,
            @Valid @RequestBody CreateCriterionRequest request) {
        CriterionDto created = criterionService.createCriterion(hackathonId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{criterionId}")
    public ResponseEntity<CriterionDto> updateCriterion(
            @PathVariable String criterionId,
            @Valid @RequestBody UpdateCriterionRequest request) {
        return ResponseEntity.ok(criterionService.updateCriterion(criterionId, request));
    }

    @GetMapping("/hackathon/{hackathonId}")
    public ResponseEntity<List<CriterionDto>> getCriteriaByHackathon(@PathVariable String hackathonId) {
        return ResponseEntity.ok(criterionService.getCriteriaByHackathon(hackathonId));
    }

    @DeleteMapping("/{criterionId}")
    public ResponseEntity<Void> deleteCriterion(@PathVariable String criterionId) {
        criterionService.deleteCriterion(criterionId);
        return ResponseEntity.noContent().build();
    }
}
