import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddPriestComponent } from './add-priest/add-priest.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { OdersComponent } from './oders/oders.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { UserComponent } from './user/user.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewPriestComponent } from './view-priest/view-priest.component';
import { ViewProductComponent } from './view-product/view-product.component';
const routes: Routes = [
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      // { path: '', component: AdminDashboardComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'add-priest', component: AddPriestComponent },
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'view-product', component: ViewProductComponent },
      { path: 'view-priest', component: ViewPriestComponent },
      { path: 'view-category', component: ViewCategoryComponent },
      { path: 'orders', component: OdersComponent },
      { path: 'user', component: UserComponent },
      { path: 'edit/:id', component: EditCategoryComponent },
      { path: 'editProduct/:cid', component: ProductEditComponent },
    ],
  },

  { path: '', component: AdminLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// const routes: Routes = [
//   {
//     path : "", component : UserDashBoardComponent,
//     children:
//     [
//       {path: "",component: HomeComponent},
//       {path:"shops/:id",component:ShopSpecificComponent},
//       {path:"shop",component:ShopGeneralComponent},
//       {path:"home",component:HomeComponent},
//       {path:"about",component:AboutComponent},
//       {path:"contact",component:ContactComponent},
//       {path:"audio-video",component:AudioVideoGeneralComponent},
//       {path:"audio-videos/:id",component:AudioVideoSpecificComponent},
//       {path:"book-priest",component:BookPriestComponent}
//   ]},
//   {path:'priest',component : PriestPageComponent},
//   {path:'signup-user',component : SignUpUserComponent},
//   {path:'register-priest',component : RegisterPriestComponent},
//   {path : "**", component : PageNotFountComponent}
// ];
