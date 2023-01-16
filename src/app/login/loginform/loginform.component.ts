import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  form:FormGroup;
  isValid: string = "";

  constructor(private fb:FormBuilder, private authService: LoginService) {
    this.form = fb.group({ 
      email:['', Validators.required], 
      password: ['', Validators.required]
    });
    
  }

  ngOnInit(): void {
  }

  login() {
    const val = this.form.value;
    if (val.email && val.password) {
      this.authService.login( { "user": val.email, "pass": val.password} )
        .subscribe(
          () => {
              console.log("User is logged in");
              //this.router.navigateByUrl('/');
          }
        );
    }
  }

  logout() {
    this.authService.logoutUser();
  }

  verify() {
    console.log(localStorage.getItem('auth_tkn'));
    this.authService.verifyToken(localStorage.getItem("auth_tkn")).subscribe((val) => {
      console.log(val);
      this.isValid = JSON.stringify(val);
    })
  }

}
