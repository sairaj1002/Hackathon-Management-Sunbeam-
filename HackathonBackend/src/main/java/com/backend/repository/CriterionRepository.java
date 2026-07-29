package com.backend.repository;

import com.backend.entities.Criterion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CriterionRepository extends JpaRepository<Criterion, String> {

    List<Criterion> findByHackathonId(String hackathonId);

    void deleteByHackathonId(String hackathonId);
}
