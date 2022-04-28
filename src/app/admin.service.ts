import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  public login(Email: string, Password: string):Observable<any> {
    let log =
      'https://worship-first-by-tech-priest.herokuapp.com/admin/admin_login';
   return this.http.post<any>(log, { email: Email, password: Password });
  }
  checkToken():any{
    return localStorage.getItem("token");
  }
  checkUser(){
    return localStorage.getItem("user");
  }
}
