import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from './login.reducer'
import { LoginRedirect } from './login.actions';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private store: Store<State>) {}

    canActivate(): boolean {
        this.store.dispatch(new LoginRedirect({}));
        return false;
    }
}