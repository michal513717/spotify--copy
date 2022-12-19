import { IAuthData } from "models";

class ElectronActions {

    public async login (loginData:IAuthData) {

        return await window.electron.auth.login(loginData);
    }

    public async register(registerData:IAuthData){

        return await window.electron.auth.register(registerData);
    }

    public async createPlaylist(playList:string[]){

        return await window.electron.playlist.create(playList);
    }

    public async getAvalibleAlbums() {

        return await window.electron.music.getAvalibleAlbums();
    }
}

export const electronActions = new ElectronActions();