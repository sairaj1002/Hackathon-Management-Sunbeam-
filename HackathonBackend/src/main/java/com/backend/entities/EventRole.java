package com.backend.entities;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.SourceType;

import java.time.LocalDateTime;

@Entity
@Table(name = "event_role")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventRole {

    @EmbeddedId
    private EventRoleId id;

    @MapsId("userId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false, foreignKey = @ForeignKey(name = "fk_event_role_user"))
    private AppUser user;

    @MapsId("hackathonId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "hackathon_id", nullable = false, foreignKey = @ForeignKey(name = "fk_event_role_hackathon"))
    private Hackathon hackathon;

    @MapsId("roleId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "role_id", nullable = false, foreignKey = @ForeignKey(name = "fk_event_role_role"))
    private Role role;

    @CreationTimestamp(source = SourceType.DB) // Tells Hibernate to let the database generate it
    @Column(name = "assigned_at", nullable = false, updatable = false)
    private LocalDateTime assignedAt;
}
