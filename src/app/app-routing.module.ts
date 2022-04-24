import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddPriestComponent } from './add-priest/add-priest.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { OdersComponent } from './oders/oders.component';
import { UserComponent } from './user/user.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewPriestComponent } from './view-priest/view-priest.component';
import { ViewProductComponent } from './view-product/view-product.component';
const routes: Routes = [
  { path: 'add-product', component: AddProductComponent },

  { path: 'add-product', component: AddProductComponent },
  { path: 'add-priest', component: AddPriestComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'view-product', component: ViewProductComponent },
  { path: 'view-priest', component: ViewPriestComponent },
  { path: 'view-category', component: ViewCategoryComponent },
  { path: 'orders', component: OdersComponent },
  { path: 'user', component: UserComponent },
  {path: 'edit/:id',component: EditCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
