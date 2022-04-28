import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-oders',
  templateUrl: './oders.component.html',
  styleUrls: ['./oders.component.css'],
})
export class OdersComponent implements OnInit {
  orderList: any = [];
  constructor(private order: OrderService) {
    this.order.view().subscribe((data) => {
      console.log(data)
      this.orderList = data;
    });
  }
  ngOnInit(): void {}
}
