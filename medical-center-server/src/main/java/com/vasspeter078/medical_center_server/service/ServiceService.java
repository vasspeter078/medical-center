package com.vasspeter078.medical_center_server.service;

import com.vasspeter078.medical_center_server.model.Clinic;
import com.vasspeter078.medical_center_server.repository.ClinicRepository;
import com.vasspeter078.medical_center_server.repository.ServiceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceService {
    private final ServiceRepository serviceRepository;

    public ServiceService(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    public List<com.vasspeter078.medical_center_server.model.Service> getServices() {
        return this.serviceRepository.findAll();
    }

    public void deleteService(Long id) {
        this.serviceRepository.deleteById(id);
    }
}
