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
public class TeamMemberId implements Serializable {

    private static final long serialVersionUID = 1L;

	@Column(name = "team_id", length = 36, nullable = false)
    private String teamId;

    @Column(name = "user_id", length = 36, nullable = false)
    private String userId;

}
