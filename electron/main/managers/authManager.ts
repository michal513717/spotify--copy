import { IAuthData, IUsersDetails } from './../../../models'

class AuthManager {
    userList: IUsersDetails[];


    init() {

        this.readCurrentListOfUsers();
    }

    checkName(name: string): boolean {
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

    readCurrentListOfUsers() {

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

    login(authData: IAuthData) {

    }

    createUser(registerData: IAuthData) {

        const newIndex = this.userList[this.userList.length - 1].index + 1;
        const specialCode = this.generateSpecialCode();
        const userDetails: IUsersDetails = Object.assign(registerData, { specialCode, index: newIndex });

        this.userList.push(userDetails);
    }

    generateSpecialCode(): number {

        return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    }

    register(authData: IAuthData) {

        //require to check name
        //not required to check password, it can be checked at client side
        const { name, password } = authData;
        const canCreateUser = this.checkName(password);

        if (canCreateUser) {
            this.createUser(authData);
            return true;
        }

        return false;
    }
}

export const authManager = new AuthManager();