package com.vasspeter078.medical_center_server.repository;


import com.vasspeter078.medical_center_server.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}
