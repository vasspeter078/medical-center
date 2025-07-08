import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Long } from 'mongodb';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getServices(): Observable<any> {
    return this.http.get(`${this.apiUrl}/service/`);
  }

  deleteService(id: Long): Observable<any> {
    return this.http.delete(`${this.apiUrl}/service/${id}`);
  }

  addService(name: string, price: number, clinicId: Long): Observable<any> {
    return this.http.post(`${this.apiUrl}/service/add`, {name, price, clinicId})
  }
}