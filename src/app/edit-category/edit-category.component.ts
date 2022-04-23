import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit {
  name = '';
  type = '';
  image = '';
  id='';
  
  constructor(private edit: CategoryService,private activateRoute:ActivatedRoute) {
    this.id =<string> this.activateRoute.snapshot.paramMap.get('id');
    this.edit.viewById(this.id).subscribe(data=>{})
  }
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
      console.log(this.image);
    }
  }
  ngOnInit(): void {}
  public Edit() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('type', this.type);
    formData.append('image', this.name);
    this.edit.editCategory(formData).subscribe((data) => {
      console.log(data);
    });
  }
}
