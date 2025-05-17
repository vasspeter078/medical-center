import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { jwtDecode, JwtDecodeOptions } from 'jwt-decode';
import { UserDTO } from '../dto/userDTO';
import { UserService } from './user.service';

export interface DecodedToken {
  sub: string;
  role: string;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:8080/api';
  private user: UserDTO | null = null;
  private role: string | null = null;

  constructor(private http: HttpClient, private userService: UserService) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, {username, password}).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('jwt', response.token);
          console.log(response.id);
        }
        this.role = this.getRole();
        console.log(this.role);
      })
    );
  }

  register(firstName: string, lastName : string, email : string, username : string , password: string, role: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, {firstName, lastName, email, username, password, role});
  }

  logout(): void {
    localStorage.removeItem('jwt');
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  getRole(): string | null {
    const token = this.getToken();
    if (!token) return null;
    //const decodedToken: DecodedToken = jwtDecode(token);
    const decodedToken = jwtDecode<DecodedToken>(token);
    return decodedToken.role;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  test(): Observable<any> {
    return this.http.get(`${this.apiUrl}/test`);
  }
}
