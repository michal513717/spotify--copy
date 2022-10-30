export interface IAuthData {
    name: string;
    password: string;
}

export interface IUsersDetails extends IAuthData {
    specialCode: number,
    index: number
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



declare global {
    interface Window {
        electron: {
            addListener: (changel: string, func: <T>(...args: T[]) => void) => Promise<void>;
            removeListener: (channel: string, func: <T>(...args: T[]) => void) => Promise<void>;

            auth: {
                login: (data: IAuthData) => Promise<void>;
                register: (data: IAuthData) => Promise<boolean>;
            }
        }
    }
}