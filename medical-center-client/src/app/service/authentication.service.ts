import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { jwtDecode, JwtDecodeOptions } from 'jwt-decode';

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

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, {username, password}).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('jwt', response.token);
        }
      })
    );
  }

  register(firstName: string, lastName : string, email : string, username : string , password: string ): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, {firstName, lastName, email, username, password});
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
    const decodedToken: DecodedToken = jwtDecode(token);
    return decodedToken.role;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  test(): Observable<any> {
    return this.http.get(`${this.apiUrl}/test`);
  }
}
