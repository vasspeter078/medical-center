package com.vasspeter078.medical_center_server.controller;

import com.vasspeter078.medical_center_server.dto.UpdateAccountDTO;
import com.vasspeter078.medical_center_server.model.User;
import com.vasspeter078.medical_center_server.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        this.userService.registerUser(user);
        return ResponseEntity.ok("User registered");
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        Optional<User> user = userService.getUser(id);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getUsers();
        System.out.println(users.size());
        return ResponseEntity.ok(users);
    }

    @PostMapping("/update-account")
    public ResponseEntity<String> updateAccount(@RequestBody UpdateAccountDTO updateAccountDTO) {
        this.userService.updateUser(updateAccountDTO);
        return ResponseEntity.ok("User updated");
    }

    @GetMapping("/doctors")
    public ResponseEntity<List<User>> getDoctors() {
        List<User> doctors = userService.getDoctors();
        System.out.println(doctors.size());
        return ResponseEntity.ok(doctors);
    }
}
