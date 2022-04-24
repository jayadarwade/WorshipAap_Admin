import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  public addCategory(formData: FormData): Observable<any> {
    let Add =
      'https://worship-first-by-tech-priest.herokuapp.com/product-category/add';
    return this.http.post<any>(Add, formData);
  }

  public viewCategory(): Observable<any> {
    let view =
      'https://worship-first-by-tech-priest.herokuapp.com/product-category/view';
    return this.http.get<any>(view);
  }

  public deleteCategory(id: string): Observable<any> {
    let dlt =
      'https://worship-first-by-tech-priest.herokuapp.com/product-category/delete';
    return this.http.delete<any>(dlt + '/' + id);
  }

  public editCategory(formData: FormData): Observable<any> {
    let edit =
      'https://worship-first-by-tech-priest.herokuapp.com/product-category/edit';
    return this.http.post<any>(edit, formData);
  }
  public viewById(cid: string) {
    let view =
      'http://localhost:3000/product-category/view-product-categoryId';
    return this.http.post<any>(view, { id:cid });
  }
}
