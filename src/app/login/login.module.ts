import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

import { StoreModule } from '@ngrx/store';
import {reducers} from './login.reducer';
import { LoginEffects } from './login.effects';
import { EffectsModule } from '@ngrx/effects';
import { LoginService } from './login.services';
import { LoginGuard } from './login-guard.services';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    EffectsModule.forFeature([LoginEffects]),
  ],
  declarations: [LoginComponent],
  providers: [LoginService, LoginGuard]
})
export class LoginModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [LoginService, LoginGuard],
    };
  }
}

@NgModule({
  imports: [
    LoginModule,
    RouterModule.forChild([{ path: 'login', component: LoginComponent }]),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([LoginEffects]),
  ],
})
export class RootAuthModule {}