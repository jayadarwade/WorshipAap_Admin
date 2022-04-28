import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public addProduct(formData: FormData): Observable<any> {
    let add = 'https://worship-first-by-tech-priest.herokuapp.com/product/add';
    return this.http.post<any>(add, formData);
  }

  public viewProduct(): Observable<any> {
    let view = 'https://worship-first-by-tech-priest.herokuapp.com/product/view';
    return this.http.get<any>(view);
  }

  public deleteProduct(id:string): Observable<any> {
    let dlt = 'https://worship-first-by-tech-priest.herokuapp.com/product/delete';
    return this.http.delete<any>(dlt+'/'+id);
  }

  public viewById(cid: string) {
    let view =
      'https://worship-first-by-tech-priest.herokuapp.com/product/view-productid';
    return this.http.post<any>(view, { id:cid });
  }

  public editProduct(formData:FormData):Observable<any>{
    let edit='https://worship-first-by-tech-priest.herokuapp.com/product/edit';
    return this.http.post<any>(edit,formData)
  }
}
