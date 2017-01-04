import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Users } from "./users";
import { UserRoutes } from "./userRoutes";
import {Layout} from "./layout";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        UserRoutes
    ],
    declarations: [Users, Layout],
    bootstrap: [Layout]
})
export class UserModule { }