import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, getLoggedInSelector } from './login.reducer'
import { Login } from './login.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginState$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.loginState$ = this.store.pipe(select(getLoggedInSelector));
  }

  ngOnInit() {
    this.loginState$.subscribe(value => {
      console.log(value);
    });
    this.store.dispatch(new Login({}));
  }

}
