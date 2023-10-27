import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private url: string = "";
  constructor(private auth: LoginService, private router: Router) { }

  private authState(): boolean {
    //if user is logged it should not be able to open Login Or register again
    if (this.isLoginOrRegisterRoute()) {
      alert("You are already authenticated. Navigating home...");
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  private notAuthState(): boolean {
    if (this.isProtectedRoute()) {
      alert("You need to login to open this view. Navigating home...");
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  private isLoginOrRegisterRoute(): boolean {
    if (this.url.includes('/auth/login') || this.url.includes('/auth/register')) {
      return true;
    }
    return false;
  }

  private isProtectedRoute(): boolean {
    if (this.url.includes('/prodmonitor') || this.url.includes('/newcontent') || this.url.includes("/logout")) {
      return true;
    }
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.url = state.url;
    if (this.auth.isAuthenticated()) {
      return this.authState();
    }
    return this.notAuthState();
  }

}
