import { IUserService } from "./iuserService";
export class UserService implements IUserService {
    public getUsers(): Array<any> {
        let users: Array<any> = [
            { id: 1, firstName: "Tu", lastName: "Tran", userName: "tutran", color: "red", isCustomBackground: false },
            { id: 2, firstName: "Tu 1", lastName: "Tran", userName: "tutran2", color: "blue", isCustomBackground: false },
            { id: 3, firstName: "Tu 2", lastName: "Tran", userName: "tutran3", color: "green", isCustomBackground: false },
            { id: 4, firstName: "Tech", lastName: "Coaching", userName: "techcoaching", color: "blue", isCustomBackground: false }
        ];
        return users;
    }
}