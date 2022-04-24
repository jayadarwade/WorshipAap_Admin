import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  list: any = [];
  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.product.viewProduct().subscribe((data) => {
      this.list = data;
    });
  }

  public delete(cid: string) {
    this.product.deleteProduct(cid).subscribe((data) => {
      console.log(data);
      if (data) alert('Are you sure ');
      else alert('Opps something went wrong');
      this.ngOnInit();
    });
  }
}
