package com.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "hackathon")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Hackathon {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", length = 36, nullable = false, updatable = false)
    private String id;

    @NotNull
    @Size(max = 160)
    @Column(name = "name", length = 160, nullable = false)
    private String name;

    @NotNull
    @Column(name = "starts_at", nullable = false)
    private LocalDateTime startsAt;

    @NotNull
    @Column(name = "submission_deadline", nullable = false)
    private LocalDateTime submissionDeadline;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Hackathon hackathon = (Hackathon) o;
        return Objects.equals(id, hackathon.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
