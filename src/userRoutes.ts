import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Users } from "./users";

let routes: Routes = [
    { path: "", redirectTo: "/users", pathMatch: 'full' },
    { path: 'users', component: Users }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class UserRoutes { }