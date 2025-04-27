package com.vasspeter078.medical_center_server.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "appointments")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime time;

    @JoinColumn(name = "Id")
    private Long DoctorId;

    @JoinColumn(name = "Id")
    private Long PatientId;


}
