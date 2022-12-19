import { IAuthData, IError, ILoginResponse, IRegisterResponse, IResponseData, IUsersDetails } from './../../../models'
import { toast } from './../utils/toast';
import { BrowserWindow } from 'electron'
import { postAxios } from '../utils/axios';

class AuthManager {
    private readonly staticURL = 'http://192.168.100.2:3000/';
    userList: IUsersDetails[];

    public async login(authData: IAuthData): Promise<boolean> {

        const loginStatus = await postAxios<ILoginResponse>( this.staticURL + 'login', authData);
        
        const message = (loginStatus as IResponseData<ILoginResponse>).response.message;

        if ( (loginStatus as IResponseData<ILoginResponse>).response.isLogginSuccesfull === true ){

            this.toastSucces("Login Succefully", message);
            return true;   
        } else {
            
            this.toastError("Error", message);
            return false;
        }
    }

    public async register(authData: IAuthData): Promise<boolean> {
        
        const registerStatus = await postAxios<IRegisterResponse>( this.staticURL + 'register', authData);

        const message = (registerStatus as IResponseData<IRegisterResponse>).response.message;
        
        if ( (registerStatus as IResponseData<IRegisterResponse>).response.isResponseSuccesfull === true ){

            this.toastSucces("login Succesfully", message);
            return true;
        } else {

            this.toastError("Error",  message);
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