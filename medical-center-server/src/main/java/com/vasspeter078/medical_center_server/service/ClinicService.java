package com.vasspeter078.medical_center_server.service;

import com.vasspeter078.medical_center_server.model.Appointment;
import com.vasspeter078.medical_center_server.model.Clinic;
import com.vasspeter078.medical_center_server.repository.AppointmentRepository;
import com.vasspeter078.medical_center_server.repository.ClinicRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClinicService {
    private final ClinicRepository clinicRepository;

    public ClinicService(ClinicRepository clinicRepository) {
        this.clinicRepository = clinicRepository;
    }

    public List<Clinic> getClinics() {
        return this.clinicRepository.findAll();
    }

    public void deleteClinic(Long id) {
        this.clinicRepository.deleteById(id);
    }
}
