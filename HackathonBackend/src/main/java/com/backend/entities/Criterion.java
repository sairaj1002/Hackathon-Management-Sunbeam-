package com.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "criterion")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Criterion {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", length = 36, nullable = false, updatable = false)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "hackathon_id", nullable = false, foreignKey = @ForeignKey(name = "fk_criterion_hackathon"))
    private Hackathon hackathon;

    @NotNull
    @Size(max = 80)
    @Column(name = "name", length = 80, nullable = false)
    private String name;

    @NotNull
    @DecimalMin(value = "0.01", inclusive = true)
    @Column(name = "weight", precision = 5, scale = 2, nullable = false)
    private BigDecimal weight;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Criterion criterion = (Criterion) o;
        return Objects.equals(id, criterion.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
