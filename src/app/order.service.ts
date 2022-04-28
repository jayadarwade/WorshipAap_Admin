import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}
  public view():Observable<any> {
    let view = 'https://worship-first-by-tech-priest.herokuapp.com/order/view';
   return this.http.get<any>(view);
  }
}
