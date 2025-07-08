package com.vasspeter078.medical_center_server.dto;

public class AddServiceDTO {
    private String name;

    private int price;

    private Long clinicId;

    public AddServiceDTO() {}

    public AddServiceDTO(String name, int price, Long clinicId) { this.name = name; this.price = price; this.clinicId = clinicId;}

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Long getClinicId() {
        return clinicId;
    }

    public void setClinicId(Long clinicId) {
        this.clinicId = clinicId;
    }
}
