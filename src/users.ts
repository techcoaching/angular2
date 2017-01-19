import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "./userService";
@Component({
    selector: "users",
    templateUrl: "src/users.html",
    styles: ['table th{font-size: 20px;}']
})
export class Users {
    private users: Array<any> = [];
    public currentSelected: any = null;
    constructor(userService: UserService) {
        this.users = userService.getUsers();
    }
    public onPreviewClicked(user: any) {
        this.currentSelected = user;
    }
}