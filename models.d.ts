export interface IRegisteredData {
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