package com.vasspeter078.medical_center_server.repository;

import com.vasspeter078.medical_center_server.model.Clinic;
import com.vasspeter078.medical_center_server.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {
}
