import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Router } from "@angular/router";
import { AuthActionTypes, Login, LoginSuccess, LoginFailed } from './login.actions'

import { map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { LoginService } from "./login.services";
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Injectable()
export class LoginEffects {
    @Effect()
    login$ = this.actions$.pipe(
        ofType(AuthActionTypes.LOGIN),
        map((action: Login) => action.payload),
        exhaustMap(() =>
          this.loginService
            .login()
            .pipe(
              map(user => new LoginSuccess({ user })),
              catchError(error => of(new LoginFailed(error)))
            )
        )
      );

    @Effect({ dispatch: false })
    loginSuccess$ = this.actions$.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS),
        tap(() => this.router.navigate(['/']))
    );

    @Effect({ dispatch: false })
    loginRedirect$ = this.actions$.pipe(
        ofType(AuthActionTypes.LOGIN_REDIRECT),
        tap(authed => {
            this.router.navigate(['/login']);
        })
    );

    constructor(
        private actions$: Actions,
        private loginService: LoginService,
        private router: Router
    ) {}

}