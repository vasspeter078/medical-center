package com.vasspeter078.medical_center_server.dto;

public class OpenClinicDTO {
    private String name;

    private String description;

    public OpenClinicDTO() {}

    public OpenClinicDTO(String name, String description) { this.name = name; this.description = description; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
