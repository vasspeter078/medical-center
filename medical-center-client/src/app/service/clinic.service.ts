import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Long } from 'mongodb';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  private readonly apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getClinics(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clinic/`);
  }

  deleteClinic(id: Long): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clinic/${id}`);
  }

  addClinic(name: string, description: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/clinic/add`, {name, description})
  }
}
