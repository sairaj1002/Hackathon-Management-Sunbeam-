package com.backend.repository;

import com.backend.entities.EventRole;
import com.backend.entities.EventRoleId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRoleRepository extends JpaRepository<EventRole, EventRoleId> {

    List<EventRole> findByIdUserId(String userId);

    List<EventRole> findByIdHackathonId(String hackathonId);

    @Query("SELECT CASE WHEN COUNT(er) > 0 THEN true ELSE false END " +
           "FROM EventRole er " +
           "WHERE er.id.userId = :userId " +
           "AND er.id.hackathonId = :hackathonId " +
           "AND er.role.name = :roleName")
    boolean userHasRoleInHackathon(@Param("userId") String userId,
                                   @Param("hackathonId") String hackathonId,
                                   @Param("roleName") String roleName);
}
