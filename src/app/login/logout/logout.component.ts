import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/ngrx/login.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(private authService: LoginService, private toastr: ToastrService, private store: Store<{ loginstate: boolean }>, private router: Router){

  }

  showFailure() {
    this.toastr.error('Hidding protected endpoints', 'Logout');
  }

  logout() {
    this.authService.logoutUser();
    this.store.dispatch(logout());
    this.router.navigateByUrl('/');
    this.showFailure();
  }
}
