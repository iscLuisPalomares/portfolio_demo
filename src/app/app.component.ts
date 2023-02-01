import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, logout } from './ngrx/login.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isUserLogged: boolean = false;
  userIsLogged$!: Observable<boolean>;
  
  title = 'Portfolio';
  constructor(private store: Store<{loginstate: boolean}>) {
    this.userIsLogged$ = store.select('loginstate');
    // store.select(store => { console.log(store.loginReducer); });
    this.userIsLogged$.pipe().subscribe((value: boolean) => {
      console.log(value);
      this.isUserLogged = value;
    });
    // this.simulateLogout();
  }

  ngOnInit(): void {
    // console.log(this.userIsLogged$);
  }
}
