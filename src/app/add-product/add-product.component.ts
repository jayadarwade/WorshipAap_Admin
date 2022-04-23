import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  name1 = '';
  price = '';
  image = '';
  description = '';
  keyword = '';
  stock = '';
  categoryid = '';
  list: any = [];
  catid: any[] = [];
  constructor(
    private product: ProductService,
    private category: CategoryService
  ) {
    this.category.viewCategory().subscribe((data) => {
      console.log(data);
      this.catid = data;
    });
  }

  ngOnInit(): void {}
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
      console.log(this.image);
    }
  }

  get(id: any) {
    this.categoryid = id;
  }
  public add() {
    const formData = new FormData();
    formData.append('name', this.name1);
    formData.append('image', this.image);
    formData.append('price', this.price);
    formData.append('description', this.description);
    formData.append('stock', this.stock);
    formData.append('category', this.categoryid);
    formData.append('keywords', this.keyword);
    this.product.addProduct(formData).subscribe((data) => {
      console.log(data);
      this.list = data;
      if (data) alert('Add sucess');
      else alert('Failed');
    });
  }
}
