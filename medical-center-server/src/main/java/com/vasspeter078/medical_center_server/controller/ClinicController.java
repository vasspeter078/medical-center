package com.vasspeter078.medical_center_server.controller;

import com.vasspeter078.medical_center_server.dto.AddDoctorToClinicDTO;
import com.vasspeter078.medical_center_server.dto.OpenAppointmentDTO;
import com.vasspeter078.medical_center_server.dto.OpenClinicDTO;
import com.vasspeter078.medical_center_server.model.Appointment;
import com.vasspeter078.medical_center_server.model.Clinic;
import com.vasspeter078.medical_center_server.repository.ClinicRepository;
import com.vasspeter078.medical_center_server.service.ClinicService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/clinic")
public class ClinicController {

    private ClinicRepository clinicRepository;

    private ClinicService clinicService;

    public ClinicController(ClinicRepository clinicRepository, ClinicService clinicService) {
        this.clinicRepository = clinicRepository;
        this.clinicService = clinicService;
    }

    @PostMapping("/add")
    public ResponseEntity<String> openClinic(@RequestBody OpenClinicDTO openClinicDTO) {
        System.out.println("hello");
        Clinic clinic = new Clinic(openClinicDTO.getName(), openClinicDTO.getDescription());
        clinicRepository.save(clinic);
        return ResponseEntity.ok("Clinic opened");
    }

    @GetMapping("/")
    public ResponseEntity<List<Clinic>> getClinics() {
        List<Clinic> clinics = clinicService.getClinics();
        return ResponseEntity.ok(clinics);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteClinic(@PathVariable Long id) {
        this.clinicService.deleteClinic(id);
        return ResponseEntity.ok("Clinic deleted");
    }

    @PutMapping("/add-doctor")
    public ResponseEntity<String> addDoctorToClinic(@RequestBody AddDoctorToClinicDTO addDoctorToClinicDTO) {
        return ResponseEntity.ok("jksl");
    }
}
