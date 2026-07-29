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
public class EventRoleId implements Serializable {

    private static final long serialVersionUID = 1L;

	@Column(name = "user_id", length = 36, nullable = false)
    private String userId;

    @Column(name = "hackathon_id", length = 36, nullable = false)
    private String hackathonId;

    @Column(name = "role_id", nullable = false)
    private Short roleId;

}
