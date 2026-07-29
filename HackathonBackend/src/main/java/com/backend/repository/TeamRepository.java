package com.backend.repository;

import com.backend.entities.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TeamRepository extends JpaRepository<Team, String> {

    Optional<Team> findByInviteCode(String inviteCode);

    List<Team> findByHackathonId(String hackathonId);

    boolean existsByHackathonIdAndName(String hackathonId, String name);

    boolean existsByInviteCode(String inviteCode);

    @Query("SELECT COUNT(tm) FROM TeamMember tm WHERE tm.id.teamId = :teamId")
    long countMembersByTeamId(@Param("teamId") String teamId);
}
