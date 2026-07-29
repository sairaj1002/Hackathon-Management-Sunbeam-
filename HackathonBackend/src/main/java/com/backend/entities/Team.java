package com.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.Objects;

@Entity
@Table(
    name = "team",
    uniqueConstraints = {
        @UniqueConstraint(name = "uk_team_invite_code", columnNames = "invite_code"),
        @UniqueConstraint(name = "uk_team_hackathon_name", columnNames = {"hackathon_id", "name"})
    }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", length = 36, nullable = false, updatable = false)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "hackathon_id", nullable = false, foreignKey = @ForeignKey(name = "fk_team_hackathon"))
    private Hackathon hackathon;

    @NotNull
    @Size(max = 100)
    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @NotNull
    @Size(max = 32)
    @Column(name = "invite_code", length = 32, nullable = false)
    private String inviteCode;

    @NotNull
    @Min(1)
    @Max(10)
    @Column(name = "max_size", nullable = false)
    private Integer maxSize;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Team team = (Team) o;
        return Objects.equals(id, team.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
