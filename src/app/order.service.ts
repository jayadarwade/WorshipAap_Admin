import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}
  public view() {
    let view = 'https://worship-first-by-tech-priest.herokuapp.com/order/view';
    this.http.get<any>(view);
  }
}
