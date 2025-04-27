package com.vasspeter078.medical_center_server.controller;

import com.vasspeter078.medical_center_server.model.User;
import com.vasspeter078.medical_center_server.service.UserService;
import com.vasspeter078.medical_center_server.util.Role;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class HelloController {
    private final UserService userService;

    public HelloController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/test")
    public int test() {
        return 10;
    }

    @GetMapping("/put")
    public int put() {
        userService.addUser(new User("hsdjkf", "jdksl", "jkfds", Role.PATIENT));
        return userService.getUsers().size();
    }

    @GetMapping("/delete")
    public int delete() {
        userService.deleteUsers();
        return userService.getUsers().size();
    }
}