package com.backend.repository;

import com.backend.entities.Hackathon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface HackathonRepository extends JpaRepository<Hackathon, String> {

    List<Hackathon> findBySubmissionDeadlineAfter(LocalDateTime now);

    @Query("SELECT h FROM Hackathon h WHERE h.startsAt <= :now AND h.submissionDeadline >= :now")
    List<Hackathon> findOngoingHackathons(@Param("now") LocalDateTime now);
}
