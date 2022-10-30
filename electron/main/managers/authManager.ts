import { IAuthData, IUsersDetails } from './../../../models'
import { toast } from './../utils/toast';
import { BrowserWindow } from 'electron'

class AuthManager {
    userList: IUsersDetails[];


    init() {

        this.readCurrentListOfUsers();
    }

    private checkName(name: string): boolean {
        let canCreate = true;

        // check is initialized
        // need to change this second statement in the if
        if (!this.userList || this.userList.length === 0) {
            this.readCurrentListOfUsers();
        }

        for (const user of this.userList) {
            if (user.name === name) {
                canCreate = false;
                break;
            }
        }

        if (canCreate) {
            return true;
        }

        return false;
    }

    private readCurrentListOfUsers() {

        //curently static for tests 
        this.userList = [
            {
                name: 'aaa',
                password: 'aaa',
                specialCode: 123,
                index: 1
            },
            {
                name: 'bbb',
                password: 'bbb',
                specialCode: 1234,
                index: 2
            }
        ]
    }

    public login(authData: IAuthData) {

        // check is initialized
        // need to change this second statement in the if
        if (!this.userList || this.userList.length === 0) {
            this.readCurrentListOfUsers();
        }

        for (const user of this.userList) {
            if (user.name === authData.name && user.password === authData.password) {

                this.toastSucces("Login Succefully", "");
                return true;
            }
        }

        this.toastError("Error", "Invalid user name or bad password");
        return false;
    }

    private createUser(registerData: IAuthData) {

        const newIndex = this.userList[this.userList.length - 1].index + 1;
        const specialCode = this.generateSpecialCode();
        const userDetails: IUsersDetails = Object.assign(registerData, { specialCode, index: newIndex });

        this.toastSucces("Register Succefully", "");
        this.userList.push(userDetails);
    }

    private generateSpecialCode(): number {

        return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    }

    public register(authData: IAuthData) {

        //require to check name
        //not required to check password, it can be checked at client side
        const { name, password } = authData;
        const canCreateUser = this.checkName(password);

        if (canCreateUser) {
            this.createUser(authData);
            return true;
        }

        this.toastError("Error", "user name already exist, please choose other");
        return false;
    }

    private toastError(title: string, desc: string) {
        toast.error(BrowserWindow.getFocusedWindow(), title, desc);
    }

    private toastSucces(title: string, desc: string) {
        toast.success(BrowserWindow.getFocusedWindow(), title, desc);
    }
}

export const authManager = new AuthManager();