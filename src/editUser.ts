import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
@Component({
    templateUrl:"src/editUser.html"
})
export class EditUser{
    constructor(route: ActivatedRoute){
        console.log("User selected:", route.params.value.id);
    }
}