import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Long } from 'mongodb';
import { Observable } from 'rxjs';
import { UserDTO } from '../dto/userDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = 'http://localhost:8080/api';

  public id: Long | null = null;

  constructor(private http: HttpClient) {}

  updateAccount(username: string, email : string): Observable<any> {
    let id = this.id;
    console.log(id);
    return this.http.post(`${this.apiUrl}/user/update-account`, {id, username, email});
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/`);
  }

  deleteUser(id: Long): Observable<any> {
    console.log(`${this.apiUrl}/user/${id}`)
    return this.http.delete(`${this.apiUrl}/user/${id}`);
  }

  getDoctors(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/doctor/`);
  }
}
