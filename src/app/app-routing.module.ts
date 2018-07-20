import { LoginComponent } from "./login/login.component";
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginGuard } from "./login/login-guard.services";

export const routes = [
    {
        path: 'login',
        canActivate: [],
        component: LoginComponent
    },
    {
        path: 'dashboard',
        canActivate: [LoginGuard],
        component: DashboardComponent,
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: [
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}