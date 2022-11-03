import { IAuthData } from "models";

class ElectronActions {

    public async login (loginData:IAuthData) {

        return await window.electron.auth.login(loginData);
    }

    public async register(registerData:IAuthData){

        return await window.electron.auth.register(registerData);
    }

    public async getAlbums(){

        return await window.electron.reader.init();
    }

    public async createPlaylist(playList:string[]){

        return await window.electron.playlist.create(playList);
    }
}

export const electronActions = new ElectronActions();