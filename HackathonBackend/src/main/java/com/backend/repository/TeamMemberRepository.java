package com.backend.repository;

import com.backend.entities.TeamMember;
import com.backend.entities.TeamMemberId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TeamMemberRepository extends JpaRepository<TeamMember, TeamMemberId> {

    List<TeamMember> findByIdTeamId(String teamId);

    List<TeamMember> findByIdUserId(String userId);

    Optional<TeamMember> findByIdTeamIdAndIsLeadTrue(String teamId);

    @Query("SELECT CASE WHEN COUNT(tm) > 0 THEN true ELSE false END " +
           "FROM TeamMember tm " +
           "WHERE tm.id.userId = :userId " +
           "AND tm.team.hackathon.id = :hackathonId")
    boolean existsByUserIdAndHackathonId(@Param("userId") String userId, 
                                         @Param("hackathonId") String hackathonId);
}
