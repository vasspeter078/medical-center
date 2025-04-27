package com.vasspeter078.medical_center_server.controller;

import com.vasspeter078.medical_center_server.model.User;
import com.vasspeter078.medical_center_server.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<String> getUser(@PathVariable Long id) {
        var user = this.userService.getUser(id);

        return ResponseEntity.ok("s,df");
    }
}
