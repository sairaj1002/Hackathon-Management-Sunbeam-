package com.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import org.hibernate.annotations.SourceType;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(
    name = "submission",
    uniqueConstraints = {
        @UniqueConstraint(name = "uk_submission_team", columnNames = "team_id")
    }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Submission {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", length = 36, nullable = false, updatable = false)
    private String id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "team_id", nullable = false, foreignKey = @ForeignKey(name = "fk_submission_team"))
    private Team team;

    @Lob
    @Column(name = "repository_url")
    private String repositoryUrl;

    @Lob
    @Column(name = "demo_url")
    private String demoUrl;

    @Lob
    @Column(name = "description")
    private String description;

    @NotNull
    @Size(max = 20)
    @Builder.Default
    @Column(name = "status", length = 20, nullable = false)
    private String status = "DRAFT";

    @Version
    @Column(name = "version", nullable = false)
    private Integer version;

    @UpdateTimestamp(source = SourceType.DB) // Tells Hibernate to let the database generate it
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Submission that = (Submission) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
