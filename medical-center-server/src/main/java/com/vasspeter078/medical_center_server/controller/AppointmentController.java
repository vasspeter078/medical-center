package com.vasspeter078.medical_center_server.controller;

import com.vasspeter078.medical_center_server.dto.OpenAppointmentDTO;
import com.vasspeter078.medical_center_server.dto.RegisterDTO;
import com.vasspeter078.medical_center_server.model.Appointment;
import com.vasspeter078.medical_center_server.model.User;
import com.vasspeter078.medical_center_server.repository.AppointmentRepository;
import com.vasspeter078.medical_center_server.service.AppointmentService;
import com.vasspeter078.medical_center_server.util.Role;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/appointment")
public class AppointmentController {
    private final AppointmentRepository appointmentRepository;

    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentRepository appointmentRepository, AppointmentService appointmentService) {
        this.appointmentRepository = appointmentRepository;
        this.appointmentService = appointmentService;
    }

    @PostMapping("/open")
    public ResponseEntity<String> openAppointment(@RequestBody OpenAppointmentDTO openAppointmentDTO) {
        Appointment appointment = new Appointment(openAppointmentDTO.getTime(), openAppointmentDTO.getDoctorId());
        appointmentRepository.save(appointment);
        return ResponseEntity.ok("Appointment opened");
    }

    @GetMapping("/")
    public ResponseEntity<List<Appointment>> getAppointments() {
        List<Appointment> appointments = appointmentService.getAppointments();
        return ResponseEntity.ok(appointments);
    }

    @PutMapping("/{id}/book")
    public ResponseEntity<String> bookAppointment(@PathVariable Long id, @RequestBody Long patientId) {
        this.appointmentService.bookAppointment(id, patientId);
        return ResponseEntity.ok("Appointment booked");
    }

    @PutMapping("/{id}/cancel")
    public ResponseEntity<String> cancelAppointment(@PathVariable Long id) {
        this.appointmentService.cancelAppointment(id);
        return ResponseEntity.ok("Appointment canceled");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAppointment(@PathVariable Long id) {
        this.appointmentService.deleteAppointment(id);
        return ResponseEntity.ok("Appointment deleted");
    }

    @GetMapping("/doctor/{doctorId}")
    public ResponseEntity<List<Appointment>> getAppointmentsByDoctor(@PathVariable Long doctorId) {
        List<Appointment> appointments = appointmentService.getAppointmentsByDoctor(doctorId);
        return ResponseEntity.ok(appointments);
    }

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<Appointment>> getAppointmentsByPatient(@PathVariable Long patientId) {
        List<Appointment> appointments = appointmentService.getAppointmentsByPatient(patientId);
        return ResponseEntity.ok(appointments);
    }
}
