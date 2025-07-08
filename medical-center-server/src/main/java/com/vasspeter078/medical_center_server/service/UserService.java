package com.vasspeter078.medical_center_server.service;

import com.vasspeter078.medical_center_server.dto.UpdateAccountDTO;
import com.vasspeter078.medical_center_server.model.User;
import com.vasspeter078.medical_center_server.repository.UserRepository;
import com.vasspeter078.medical_center_server.util.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public User addUser(User user) {
        return this.userRepository.save(user);
    }

    public Optional<User> getUser(Long id) {
        return this.userRepository.findById(id);
    }

    public void deleteUser(Long id) { this.userRepository.deleteById(id); }

    public List<User> getUsers() {
        return this.userRepository.findAll();
    }

    public void deleteUsers() {
        this.userRepository.deleteAll();
    }

    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public Optional<User> updateUser(UpdateAccountDTO updateAccountDTO) {
        Optional<User> optionalUser = userRepository.findById(updateAccountDTO.getId());
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setUsername(updateAccountDTO.getName());
            user.setEmail(updateAccountDTO.getEmail());
        }
        return optionalUser;
    }

    public List<User> getDoctors() {
        List<User> users = this.userRepository.findAll();
        List<User> doctors = users.stream().filter(user -> user.getRole() == Role.DOCTOR).collect(Collectors.toList());
        return doctors;
    }
}
