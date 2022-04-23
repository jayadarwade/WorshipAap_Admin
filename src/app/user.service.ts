import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  view = 'https://worship-first-by-tech-priest.herokuapp.com/user/view';
  constructor(private http: HttpClient) {}
  public viewUser(): Observable<any> {
    return this.http.get<any>(this.view);
  }
}
