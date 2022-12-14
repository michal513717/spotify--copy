export type statusToastType = "info" | "warning" | "success" | "error" | "loading" | undefined;

export type RequestResponse<Data extends Record<string, any>> = SuccessfulResponse<Data> | ErrorResponse

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
    isActionSuccess: boolean;
    isLogginSuccesfull: boolean;
    isAdminAccount:boolean;
    message: string;
}

export interface ILoginStatus {
    isLogginSuccesfull: boolean;
    isAdminAccount: boolean;
}

export interface IRegisterResponse {
    isActionSuccess: boolean;
    isResponseSuccesfull: boolean;
    message: string;
}

export interface IAvalibleAlbumsResponse {
    isActionSuccess: boolean;
    avalibleAlbums: string[];
    message: string;
}

export interface IAvalibleMusicResponse {
    isActionSuccess: boolean;
    avalibleMusicList: string[];
    message: string;
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

export interface SuccessfulResponse<Data extends Record<string, any>> {
    ok: true
    responseData: Data
}

export interface ErrorResponse {
    ok: false
    responseData: undefined
}

export interface IStore {
    isLogged: boolean;
    avalibleAlbumsList: string[];
    avalibleMusicFromCurrentAlbum: string[];
    currentAlbum: string;
    currentAudioName: string;

    isAdminAccount: boolean;

    //dialogs
    isDialogOpen: boolean;
    isUploadFileDialogOpen: boolean;
    isSettingsDialogOpen: boolean;

    //setDialogsOpen
    setDialogOpen: (status: boolean) => void;
    setUploadFileDialogOpen: (status: boolean) => void;
    setSettingsPanelDialogOpen: (status: boolean) => void;

    setAdminAccount: (status: boolean) => void;
    setAvalibleMusicFromCurrentAlbum: (musicList: string[]) => void;
    setAvalibleAlbumsList: (files: string[]) => void;
    setLoginStatus: (status: boolean) => void;
    setCurrentAlbum: (currentAlbum: string) => void;
    setCurrentAudioName: (name: string) => void;
}



declare global {
    interface Window {
        electron: {
            addListener: (changel: string, func: (...args: unknown[]) => void) => Promise<void>;
            removeListener: (channel: string, func: (...args: unknown[]) => void) => Promise<void>;

            auth: {
                login: (data: IAuthData) => Promise<ILoginStatus>;
                register: (data: IAuthData) => Promise<boolean>;
            },

            playlist: {
                create: (playList: string[]) => Promise<void>;
            },

            music: {
                getAvalibleAlbums: () => Promise<string[]>;
                getAvalibleMusicList: (albumName: string) => Promise<string[]>;
            }
        }
    }
}