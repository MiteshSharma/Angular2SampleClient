import { LoginComponent } from "./login.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

export const routes = [
    {
        path: '',
        component: LoginComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}