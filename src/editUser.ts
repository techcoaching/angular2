import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
@Component({
    templateUrl:"src/editUser.html"
})
export class EditUser{
    constructor(route: ActivatedRoute){
        let requiredIdparam=route.params["value"].id;
        let optionalIdparam=route.params["value"].id1;
        console.log("User selected:", requiredIdparam, optionalIdparam);
    }
}