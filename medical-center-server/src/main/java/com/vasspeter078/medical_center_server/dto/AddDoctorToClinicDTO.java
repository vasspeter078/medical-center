package com.vasspeter078.medical_center_server.dto;

public class AddDoctorToClinicDTO {
    private Long clinicId;

    private Long doctorId;

    public AddDoctorToClinicDTO() {}

    public AddDoctorToClinicDTO(Long clinicId, Long doctorId) { this.clinicId = clinicId; this.doctorId = doctorId; }

    public Long getClinicId() { return clinicId; }

    public void setClinicId(Long clinicId) { this.clinicId = clinicId; }

    public Long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }
}
