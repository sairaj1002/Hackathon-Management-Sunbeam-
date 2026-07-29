package com.backend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode
public class ScoreId implements Serializable {

    private static final long serialVersionUID = 1L;

	@Column(name = "judge_id", length = 36, nullable = false)
    private String judgeId;

    @Column(name = "submission_id", length = 36, nullable = false)
    private String submissionId;

    @Column(name = "criterion_id", length = 36, nullable = false)
    private String criterionId;

}
