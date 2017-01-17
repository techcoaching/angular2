import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "./userService";
@Component({
    selector: "users",
    templateUrl: "src/users.html"
})
export class Users {
    private users: Array<any> = [];
    constructor(userService: UserService) {
        this.users = userService.getUsers();
    }
}