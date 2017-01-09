import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: "users",
    templateUrl: "src/users.html"
})
export class Users {
    private router: Router;
    constructor(router: Router) {
        this.router = router;
    }
    public onEditClicked(userId: string) {
            this.router.navigate(["/editUser", userId,{id1:"optional-parameter"}])
    }
}