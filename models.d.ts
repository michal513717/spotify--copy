export interface IAuthData {
    name: string;
    password: string;
}

export interface IStore {
    isLogged: boolean;
    currentAudioName: string;
    currentAudioDetails: object; // need to specify

    setLoginStatus: (status: boolean) => void;
    setCurrentAudioName: (name:string) => void;
    setCurrentAudioDetails: (details: object) => void;// need to specify details
}

declare global {
    interface Window {
        electron: {
            auth: {
                login: (data:IAuthData) => Promise<void>;
                register: (data:IAuthData) => Promise<void>;
            }
        }
    }
}