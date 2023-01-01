import { IAuthData, ILoginResponse, ILoginStatus, IRegisterResponse, IUsersDetails } from './../../../models'
import { toast } from './../utils/toast';
import { BrowserWindow } from 'electron'
import { postAxios } from '../utils/axios';

class AuthManager {
    private readonly staticURL = 'http://192.168.100.2:3000/';
    userList: IUsersDetails[];

    public async login(authData: IAuthData): Promise<ILoginStatus> {

        // const loginStatus = await postAxios<ILoginResponse>( this.staticURL + 'login', authData);
        const loginStatus = await postAxios<ILoginResponse>(this.staticURL + 'login', authData)

        const message = loginStatus.responseData.message;
        console.log(loginStatus)
        if (loginStatus.ok === true) {

            this.toastSucces("Login Succefully", message);
            return { isAdminAccount: loginStatus.responseData.isAdminAccount, isLogginSuccesfull:true }
        } else {

            this.toastError("Error", message);
            return { isAdminAccount: false, isLogginSuccesfull: false };
        }
    }

    public async register(authData: IAuthData): Promise<boolean> {

        // const registerStatus = await postAxios<IRegisterResponse>( this.staticURL + 'register', authData);
        const registerStatus = await postAxios<IRegisterResponse>(this.staticURL + 'register', authData)

        const message = registerStatus.responseData.message;

        if (registerStatus.ok === true) {

            this.toastSucces("Login Succefully", message);
            return true;
        } else {

            this.toastError("Error", message);
            return false;
        }
    }

    private toastError(title: string, desc: string) {
        toast.error(BrowserWindow.getFocusedWindow(), title, desc);
    }

    private toastSucces(title: string, desc: string) {
        toast.success(BrowserWindow.getFocusedWindow(), title, desc);
    }
}

export const authManager = new AuthManager();