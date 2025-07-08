package com.vasspeter078.medical_center_server.controller;

import com.vasspeter078.medical_center_server.dto.AddDoctorToClinicDTO;
import com.vasspeter078.medical_center_server.dto.AddServiceDTO;
import com.vasspeter078.medical_center_server.dto.OpenClinicDTO;
import com.vasspeter078.medical_center_server.model.Clinic;
import com.vasspeter078.medical_center_server.model.Service;
import com.vasspeter078.medical_center_server.repository.ClinicRepository;
import com.vasspeter078.medical_center_server.repository.ServiceRepository;
import com.vasspeter078.medical_center_server.service.ClinicService;
import com.vasspeter078.medical_center_server.service.ServiceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/service")
public class ServiceController {
    private ServiceRepository serviceRepository;

    private ServiceService serviceService;

    public ServiceController( ServiceRepository serviceRepository, ServiceService serviceService) {
        this.serviceRepository = serviceRepository;
        this.serviceService = serviceService;
    }

    @PostMapping("/add")
    public ResponseEntity<String> addService(@RequestBody AddServiceDTO addServiceDTO) {
        Service service = new Service(addServiceDTO.getName(), addServiceDTO.getPrice(), addServiceDTO.getClinicId());
        serviceRepository.save(service);
        return ResponseEntity.ok("Service opened");
    }

    @GetMapping("/")
    public ResponseEntity<List<Service>> getServices() {
        List<Service> services = serviceService.getServices();
        return ResponseEntity.ok(services);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteService(@PathVariable Long id) {
        this.serviceService.deleteService(id);
        return ResponseEntity.ok("Service deleted");
    }
}
