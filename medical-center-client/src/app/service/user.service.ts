import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Long } from 'mongodb';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private userDTO: UserDTO | null = null;

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  updateAccount(firstName: string, lastName : string, email : string, username : string ): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/update-account`, {firstName, lastName, email, username});
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/`);
  }

  deleteUser(id: Long): Observable<any> {
    console.log(`${this.apiUrl}/user/${id}`)
    return this.http.delete(`${this.apiUrl}/user/${id}`);
  }
}
