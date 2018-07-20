import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { LoginModule } from "./login/login.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "../../node_modules/@ngrx/effects";
import { DashboardModule } from "./dashboard/dashboard.module";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule.forRoot(),
    DashboardModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
