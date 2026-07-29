package com.backend.repository;

import com.backend.entities.Submission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SubmissionRepository extends JpaRepository<Submission, String> {

    Optional<Submission> findByTeamId(String teamId);

    boolean existsByTeamId(String teamId);

    @Query("SELECT s FROM Submission s WHERE s.team.hackathon.id = :hackathonId AND s.status = 'SUBMITTED'")
    List<Submission> findSubmittedByHackathonId(@Param("hackathonId") String hackathonId);
}
