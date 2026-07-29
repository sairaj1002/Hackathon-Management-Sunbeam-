package com.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import org.hibernate.annotations.SourceType;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "score")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Score {

    @EmbeddedId
    private ScoreId id;

    @MapsId("judgeId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "judge_id", nullable = false, foreignKey = @ForeignKey(name = "fk_score_judge"))
    private AppUser judge;

    @MapsId("submissionId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "submission_id", nullable = false, foreignKey = @ForeignKey(name = "fk_score_submission"))
    private Submission submission;

    @MapsId("criterionId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "criterion_id", nullable = false, foreignKey = @ForeignKey(name = "fk_score_criterion"))
    private Criterion criterion;

    @NotNull
    @Min(0)
    @Max(10)
    @Column(name = "score", nullable = false)
    private Short score;

    @Lob
    @Column(name = "feedback")
    private String feedback;

    @UpdateTimestamp(source = SourceType.DB) // Tells Hibernate to let the database generate it
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;
}
