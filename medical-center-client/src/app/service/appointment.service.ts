import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Long } from 'mongodb';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private readonly apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

    getAppointmentsByDoctor(doctorId: Long): Observable<any> {
      return this.http.get(`${this.apiUrl}/appointment/doctor/${doctorId}`);
    }

    getAppointmentsByPatient(patientId: Long): Observable<any> {
      return this.http.get(`${this.apiUrl}/appointment/patient/${patientId}`);
    }

    openAppointment(time: string, doctorId: Long): Observable<any> {
      return this.http.post(`${this.apiUrl}/appointment/open`, {time, doctorId});
    }
}
