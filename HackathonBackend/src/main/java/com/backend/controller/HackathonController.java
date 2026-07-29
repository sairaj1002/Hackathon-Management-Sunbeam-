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
@RequestMapping("/api/hackathons")
@RequiredArgsConstructor
public class HackathonController {

    private final HackathonService hackathonService;

    @PostMapping
    public ResponseEntity<HackathonDto> createHackathon(@Valid @RequestBody CreateHackathonRequest request) {
        HackathonDto created = hackathonService.createHackathon(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HackathonDto> updateHackathon(@PathVariable String id, @Valid @RequestBody UpdateHackathonRequest request) {
        return ResponseEntity.ok(hackathonService.updateHackathon(id, request));
    }

    @GetMapping("/{id}")
    public ResponseEntity<HackathonDto> getHackathonById(@PathVariable String id) {
        return ResponseEntity.ok(hackathonService.getHackathonById(id));
    }

    @GetMapping
    public ResponseEntity<List<HackathonDto>> getAllHackathons() {
        return ResponseEntity.ok(hackathonService.getAllHackathons());
    }

    @GetMapping("/ongoing")
    public ResponseEntity<List<HackathonDto>> getOngoingHackathons() {
        return ResponseEntity.ok(hackathonService.getOngoingHackathons());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHackathon(@PathVariable String id) {
        hackathonService.deleteHackathon(id);
        return ResponseEntity.noContent().build();
    }
}
