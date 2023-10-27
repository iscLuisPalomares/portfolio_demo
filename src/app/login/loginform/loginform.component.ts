import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { login } from 'src/app/ngrx/login.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  form: UntypedFormGroup;
  isValid: string = "";

  constructor(private fb: UntypedFormBuilder, private authService: LoginService,
    private toastr: ToastrService, private store: Store<{ loginstate: boolean }>, private router: Router) {
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  showSuccess() {
    this.toastr.success('You can now open New record and Prod Monitor!', 'User authenticated!', { positionClass: 'toast-bottom-right' });
  }

  showFailure() {
    this.toastr.error('Hidding protected endpoints', 'Logout');
  }

  ngOnInit(): void {

  }

  login() {
    const val = this.form.value;
    let bodyObject = { username: val.email, password: val.password };
    if (val.email && val.password) {
      this.authService.login(bodyObject).subscribe(() => {
        if (this.authService.getIsUserAuthenticated()) {
          console.log("User is logged in");
          this.store.dispatch(login());
          this.showSuccess();
          this.router.navigateByUrl('/');
        } else {
          console.log("user couldn't login");
        }
      });
    }
    this.form.setValue({ email: "", password: "" });
  }

  verify() {
    if (localStorage.getItem("auth_tkn")) {
      this.authService.verifyToken(localStorage.getItem("auth_tkn")).subscribe((val) => {
        let tokenVerification = JSON.parse(JSON.stringify(val));
        if (tokenVerification["isValid"]) {
          this.toastr.success("token valid");
        } else {
          this.toastr.error("token invalid");
        }
      });
    } else {
      this.toastr.error("No token available");
    }
  }
}
