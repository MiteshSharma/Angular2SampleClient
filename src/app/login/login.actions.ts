import { Action } from "@ngrx/store";

export enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login success',
    LOGIN_FAILED = '[Auth] Login failed',
    LOGIN_REDIRECT = '[Auth] Login redirect',
  }

export class Login implements Action {
    readonly type = AuthActionTypes.LOGIN;
  
    constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
    readonly type = AuthActionTypes.LOGIN_SUCCESS;
  
    constructor(public payload: any) {}
}

export class LoginFailed implements Action {
    readonly type = AuthActionTypes.LOGIN_FAILED;
  
    constructor(public payload: any) {}
}

export class LoginRedirect implements Action {
    readonly type = AuthActionTypes.LOGIN_REDIRECT;
  
    constructor(public payload: any) {}
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginFailed
  | LoginRedirect;