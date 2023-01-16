import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private url: string = "";
  constructor(private auth: LoginService, private router: Router) { }

  private authState(): boolean {
    if (this.isLoginOrRegisterRoute()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  private notAuthState(): boolean {
    if (this.isProtectedRoute()) {
      this.router.navigate(['/']);
      return false;
    }
    // if (this.isLoginOrRegisterRoute()) return true;
    // this.router.navigate(['/auth/login']);
    // return false;
    return true;
  }
  private isLoginOrRegisterRoute(): boolean {
    console.log("checkif prodmonitor");
    if (this.url.includes('/auth/login') || this.url.includes('/auth/register')) {
      return true;
    }
    return false;
  }

  private isProtectedRoute(): boolean {
    if (this.url.includes('/prodmonitor') || this.url.includes('/newcontent')) {
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
