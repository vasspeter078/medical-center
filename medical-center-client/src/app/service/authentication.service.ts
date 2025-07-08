import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { jwtDecode, JwtDecodeOptions } from 'jwt-decode';
import { UserService } from './user.service';
import { UserDTO } from '../dto/userDTO';
import { Long } from 'mongodb';

export interface DecodedToken {
  sub: string;
  role: string;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly apiUrl = 'http://localhost:8080/api';

  private id: Long | null = null;

  private role: string | null = null;

  constructor(private http: HttpClient, private userService: UserService) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, {email, password}).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('jwt', response.token);
        }
        this.id = response.id;
        this.role = this.getRole();
        this.userService.id = this.id;
      })
    );
  }

  register(username : string, email : string, password: string, role: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, {username, email, password, role});
  }

  logout(): void {
    this.id = null;
    this.role = null;
    localStorage.removeItem('jwt');
    this.userService.id = null;
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  getRole(): string | null {
    const token = this.getToken();
    if (!token) return null;
    const decodedToken = jwtDecode<DecodedToken>(token);
    return decodedToken.role;
  }

  getId(): Long | null {
    return this.id;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  isDoctor(): boolean {
    return this.getRole() === "[ROLE_DOCTOR]";
  }

  isAdmin(): boolean {
    return this.getRole() === "[ROLE_ADMIN]";
  }

  test(): Observable<any> {
    return this.http.get(`${this.apiUrl}/test`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/{id}`);
  }
}
