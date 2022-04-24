import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
})
export class ViewCategoryComponent implements OnInit {
  list: any[] = [];
  constructor(private category: CategoryService,private router:Router) {}

  ngOnInit(): void {
    this.category.viewCategory().subscribe((data) => {
      this.list = data;
      console.log(data);
    });
  }

  public delete(cid: string) {
    this.category.deleteCategory(cid).subscribe((data) => {
      console.log(data);
      if (data) alert('Are you sure ');
      else alert('Opps something went wrong');
      this.ngOnInit();
    });
  }

  edit(cid:string){
    this.router.navigate(['edit',cid])
  }
}
