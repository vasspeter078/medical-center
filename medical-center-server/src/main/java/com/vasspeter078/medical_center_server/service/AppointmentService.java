package com.vasspeter078.medical_center_server.service;

import com.vasspeter078.medical_center_server.model.Appointment;
import com.vasspeter078.medical_center_server.model.User;
import com.vasspeter078.medical_center_server.repository.AppointmentRepository;
import com.vasspeter078.medical_center_server.util.AppointmentStatus;
import com.vasspeter078.medical_center_server.util.Role;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AppointmentService {
    private final AppointmentRepository appointmentRepository;

    public AppointmentService(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    public List<Appointment> getAppointments() {
        return this.appointmentRepository.findAll();
    }

    public Optional<Appointment> bookAppointment(Long id, Long patientId) {
        Optional<Appointment> optionalAppointment = appointmentRepository.findById(id);
        if (optionalAppointment.isPresent()) {
            Appointment appointment = optionalAppointment.get();
            appointment.setPatientId(patientId);
            appointment.setStatus(AppointmentStatus.BOOKED);
        }
        return optionalAppointment;
    }

    public Optional<Appointment> cancelAppointment(Long id) {
        Optional<Appointment> optionalAppointment = appointmentRepository.findById(id);
        if (optionalAppointment.isPresent()) {
            Appointment appointment = optionalAppointment.get();
            appointment.setPatientId(null);
            appointment.setStatus(AppointmentStatus.AVAILABLE);
        }
        return optionalAppointment;
    }

    public void deleteAppointment(Long id) {
        this.appointmentRepository.deleteById(id);
    }

    public List<Appointment> getAppointmentsByDoctor(Long doctorId) {
        List<Appointment> appointments = this.appointmentRepository.findAll();
        List<Appointment> doctorAppointments = appointments.stream()
                .filter(appointment -> appointment.getDoctorId() == doctorId)
                .collect(Collectors.toList());
        return doctorAppointments;
    }

    public List<Appointment> getAppointmentsByPatient(Long patientId) {
        List<Appointment> appointments = this.appointmentRepository.findAll();
        List<Appointment> patientAppointments = appointments.stream()
                .filter(appointment -> appointment.getPatientId() == patientId)
                .collect(Collectors.toList());
        return patientAppointments;
    }
}
