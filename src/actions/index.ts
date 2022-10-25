import { IAuthData } from "models";

class ElectronActions {

    public async login (loginData:IAuthData) {

        return await window.electron.auth.login(loginData);
    }

    public async register(registerData:IAuthData){

        return await window.electron.auth.register(registerData);
    }
}

export const electronActions = new ElectronActions();