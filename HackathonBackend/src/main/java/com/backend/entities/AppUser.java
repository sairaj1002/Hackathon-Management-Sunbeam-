package com.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.SourceType;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "app_user")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", length = 36, nullable = false, updatable = false)
    private String id;

    @NotNull
    @Email
    @Size(max = 320)
    @Column(name = "email", length = 320, nullable = false, unique = true)
    private String email;

    @Size(max = 100)
    @Column(name = "password_hash", length = 100)
    private String passwordHash;

    @NotNull
    @Size(max = 120)
    @Column(name = "display_name", length = 120, nullable = false)
    private String displayName;

    @CreationTimestamp(source = SourceType.DB) // Tells Hibernate to let the database generate it
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    @UpdateTimestamp(source = SourceType.DB) // Tells Hibernate to let the database generate it
    @Column(name = "updated_at", nullable = false, updatable = false)
    private LocalDateTime updateddAt;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AppUser appUser = (AppUser) o;
        return Objects.equals(id, appUser.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
