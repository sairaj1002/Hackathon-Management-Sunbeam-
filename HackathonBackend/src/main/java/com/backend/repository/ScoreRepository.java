package com.backend.repository;

import com.backend.entities.Score;
import com.backend.entities.ScoreId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScoreRepository extends JpaRepository<Score, ScoreId> {

    List<Score> findByIdJudgeId(String judgeId);

    List<Score> findByIdSubmissionId(String submissionId);

    List<Score> findByIdJudgeIdAndIdSubmissionId(String judgeId, String submissionId);

    @Query("SELECT SUM(s.score * c.weight) " +
           "FROM Score s JOIN s.criterion c " +
           "WHERE s.id.submissionId = :submissionId")
    Double calculateWeightedScoreForSubmission(@Param("submissionId") String submissionId);

    @Query("SELECT s.id.submissionId, SUM(s.score * c.weight) / COUNT(DISTINCT s.id.judgeId) " +
           "FROM Score s JOIN s.criterion c " +
           "WHERE s.submission.team.hackathon.id = :hackathonId " +
           "GROUP BY s.id.submissionId " +
           "ORDER BY SUM(s.score * c.weight) DESC")
    List<Object[]> getLeaderboardByHackathonId(@Param("hackathonId") String hackathonId);
}
