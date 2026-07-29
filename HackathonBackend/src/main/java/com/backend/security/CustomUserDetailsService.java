package com.backend.security;

import com.backend.entities.*;
import com.backend.repository.*;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final AppUserRepository userRepository;
    private final EventRoleRepository eventRoleRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        AppUser user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));

        List<SimpleGrantedAuthority> authorities = eventRoleRepository.findByIdUserId(user.getId())
                .stream()
                .map(er -> new SimpleGrantedAuthority("ROLE_" + er.getRole().getName()))
                .distinct()
                .toList();

        return new CustomUserDetails(user, authorities);
    }
}
