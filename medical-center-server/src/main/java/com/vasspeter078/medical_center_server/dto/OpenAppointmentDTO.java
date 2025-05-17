package com.vasspeter078.medical_center_server.dto;

import java.time.LocalDateTime;

public class OpenAppointmentDTO {
    private LocalDateTime time;
    private Long doctorId;
    public OpenAppointmentDTO() {}
    public OpenAppointmentDTO(LocalDateTime time, Long doctorId) {
        this.time = time;
        this.doctorId = doctorId;
    }
    public LocalDateTime getTime() {
        return time;
    }
    public void setTime(LocalDateTime time) {
        this.time = time;
    }
    public Long getDoctorId() {
        return doctorId;
    }
    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }
}
