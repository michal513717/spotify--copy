export type statusToastType = "info" | "warning" | "success" | "error" | "loading" | undefined;

export interface IAuthData {
    userName: string;
    password: string;
}

export interface IError {
    err: string
}

export interface IResponseData<T> {
    response: T
    status: number,
}

export interface ILoginResponse {
    isLogginSuccesfull: boolean
    message: string,
}

export interface IRegisterResponse {
    isResponseSuccesfull: boolean,
    message: string
}

export interface IhandleAppToast {
    title: string;
    description: string;
    status: statusToastType;
}

export interface IUsersDetails extends IAuthData {
    specialCode: number;
    index: number;
}

export interface IStore {
    isLogged: boolean;
    avalibeAlbumsList: object; //need to specify
    currentAudioName: string;
    currentAudioDetails: object; // need to specify

    //dialogs
    isDialogOpen: boolean;
    isCreatePlaylistDialogOpen: boolean;
    //setDialogsOpen
    setDialogOpen: (status: boolean) => void;
    setCreatePlaylistDialogOpen: (status: boolean) => void;

    setAvalibeAlbumsList: (files:object) => void;
    setLoginStatus: (status: boolean) => void;
    setCurrentAudioName: (name: string) => void;
    setCurrentAudioDetails: (details: object) => void;// need to specify details
}



declare global {
    interface Window {
        electron: {
            addListener: (changel: string, func: (...args: unknown[]) => void) => Promise<void>;
            removeListener: (channel: string, func: (...args: unknown[]) => void) => Promise<void>;

            auth: {
                login: (data: IAuthData) => Promise<boolean>;
                register: (data: IAuthData) => Promise<boolean>;
            }

            reader: {
                init: ()=> Promise<object>; // need to specify the object
            }

            playlist: {
                create: (playList:string[]) => Promise<void>;
            }
        }
    }
}