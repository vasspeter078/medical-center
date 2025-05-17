import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../dto/userDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userDTO: UserDTO | null = null;

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  updateAccount(firstName: string, lastName : string, email : string, username : string ): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/update-account`, {firstName, lastName, email, username});
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/`);
  }
}
