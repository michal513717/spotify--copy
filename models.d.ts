export interface IAuthData {
    name: string;
    password: string;
}

export interface IStore {
    isLogged: boolean;
    currentAudioName: string;
    currentAudioDetails: object; // need to specify

    //dialogs
    isDialogOpen: boolean;

    //setDialogsOpen
    setDialogOpen: (status: boolean) => void;

    setLoginStatus: (status: boolean) => void;
    setCurrentAudioName: (name: string) => void;
    setCurrentAudioDetails: (details: object) => void;// need to specify details
}

export interface IUsersDetails {
    name: string,
    password: string,
    specialCode: number,
    index: number
}

declare global {
    interface Window {
        electron: {
            auth: {
                login: (data: IAuthData) => Promise<void>;
                register: (data: IAuthData) => Promise<boolean>;
            }
        }
    }
}