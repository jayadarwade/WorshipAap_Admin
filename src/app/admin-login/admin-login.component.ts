import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private admin: AdminService,private router:Router) {}

  ngOnInit(): void {}
  public singin() {
    alert(this.email+" " + this.password);
    console.log(this.email+" " + this.password);
    this.admin.login(this.email, this.password).subscribe((data) => {
      console.log(data);
      localStorage.setItem("user",JSON.stringify(data.result));
      localStorage.setItem('token', data.token);
      if (data.status=='success'){
         alert('Log in Suceess');
       this.router.navigate(['admin-dashboard'])
    }
      else alert('dont have account');
    });
     
  }
  
  userIsLoggedIn(){
    if(this.admin.checkUser()){
      this.admin = JSON.parse(this.admin.checkUser()|| " ");
      return true;
    }
    return false;
  }
  // loginAsUser(){
  //   this.admin.userLogin(this.email,this.password).subscribe(data=>{
  //     this.admin = data.result;
  //     localStorage.setItem("user",JSON.stringify(data.result));
  //     localStorage.setItem('token', data.token);
  //   });
  // }
}
