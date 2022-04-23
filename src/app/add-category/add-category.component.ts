import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  name = '';
  type = '';
  image = '';
  constructor(private category: CategoryService) {}
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
      console.log(this.image);
    }
  }
  ngOnInit(): void {}
  public add() {
    console.log(this.image);
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('type', this.type);
    formData.append('image', this.image);
    this.category.addCategory(formData).subscribe((data) => {
      if (data) alert('add success');
      else alert('not added');
    });
  }
}
