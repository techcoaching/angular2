import {IUserService} from "./iuserService";
export class UserService implements IUserService {
    public getUsers(): Array<any> {
        let users: Array<any> = [
            { id: 1, firstName: "Tu", lastName: "Tran", userName: "tutran" },
            { id: 2, firstName: "Tu 1", lastName: "Tran", userName: "tutran2" },
            { id: 3, firstName: "Tu 2", lastName: "Tran", userName: "tutran3" }
        ];
        return users;
    }
}