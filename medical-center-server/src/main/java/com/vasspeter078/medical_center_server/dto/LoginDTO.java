package com.vasspeter078.medical_center_server.dto;

public class LoginDTO {
    private String email;
    private String password;
    public LoginDTO() {}
    public LoginDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setUPassword(String password) {
        this.password = password;
    }
}
