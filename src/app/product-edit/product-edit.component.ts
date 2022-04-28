import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  name = '';
  price = '';
  image = '';
  id = '';
  stock = '';
  keywords = '';
  category = '';
  description = '';
  newImage = '';
  constructor(
    private edit: ProductService,
    private activateRoute: ActivatedRoute
  ) {
    this.id = <string>this.activateRoute.snapshot.paramMap.get('cid');
    this.edit.viewById(this.id).subscribe((data) => {
      console.log(data);
      this.name = data.name;
      this.price = data.price;
      this.image = data.image;
      this.stock = data.stock;
      this.description = data.description;
      this.category = data.category;
      this.keywords = data.keywords;
    });
  }
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.newImage = file;
      console.log(this.image);
    }
  }
  ngOnInit(): void {}
  public Edit() {
    const formData = new FormData();
    formData.append('id', this.id);
    formData.append('name', this.name);
    formData.append('type', this.price);
    formData.append('image', this.image);
    formData.append('image', this.stock);
    formData.append('image', this.description);
    formData.append('image', this.category);
    formData.append('keywords', this.keywords);
    formData.append('oldImage', this.image);
    formData.append('image', this.newImage);
    this.edit.editProduct(formData).subscribe((data) => {
      console.log(data);
      if (data) alert('sucess');
      else alert('not update ');
    });
  }
}
