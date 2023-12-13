import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(700, style({
        opacity: 1
      }))),
    ]),
  ]
})
export class AppComponent {
  isUserLogged: boolean = false;
  userIsLogged$!: Observable<boolean>;
  
  title = 'portfolio_demo';
  constructor(store: Store<{loginstate: boolean}>) {
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
