package com.vasspeter078.medical_center_server.controller;

import com.vasspeter078.medical_center_server.dto.LoginDTO;
import com.vasspeter078.medical_center_server.dto.RegisterDTO;
import com.vasspeter078.medical_center_server.model.User;
import com.vasspeter078.medical_center_server.repository.UserRepository;
import com.vasspeter078.medical_center_server.util.JwtUtil;
import com.vasspeter078.medical_center_server.util.Role;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthController(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterDTO registerDTO) {
        System.out.println(registerDTO.getUsername());
        User user = new User(registerDTO.getUsername(), registerDTO.getEmail(), registerDTO.getPassword(), Role.valueOf(registerDTO.getRole()));
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "User registered successfully!";
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody LoginDTO loginDTO) {
        User user = userRepository.findByEmail(loginDTO.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token = jwtUtil.generateToken(new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + user.getRole()))
        ));
        return Map.of("token", token, "id", user.getId().toString());
    }
}