import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LOGIN_API_URL, LOGOUT_API_URL } from './injectable';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http,
              @Inject(LOGIN_API_URL) private loginUrl: string,
              @Inject(LOGOUT_API_URL) private logoutUrl: string) { }

  loginPost(user: string, password: string): Observable<any> {
    return this.http
      .post(this.loginUrl, {user: user, password: password})
      .map((response: Response) => response.json());
  }

  login(user: string, password: string): boolean {
    this.loginPost(user, password)
      .subscribe((response: any) => {
        console.log(response);
        localStorage.setItem('username', response);
        return true;
      }, (error: any) => {
        console.log(error);
        return false;
      });
    return false;
  }

  logout(): void {
    this.http
      .get(this.logoutUrl)
      .map((response: Response) => response.json());
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}
