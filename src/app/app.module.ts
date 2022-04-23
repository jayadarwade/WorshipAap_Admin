import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddPriestComponent } from './add-priest/add-priest.component';
import { ViewPriestComponent } from './view-priest/view-priest.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { OdersComponent } from './oders/oders.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AddCategoryComponent,
    AddProductComponent,
    AddPriestComponent,
    ViewPriestComponent,
    ViewProductComponent,
    ViewCategoryComponent,
    OdersComponent,
    UserComponent,
    EditCategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
