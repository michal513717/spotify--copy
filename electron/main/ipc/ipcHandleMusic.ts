import { ipcMain } from "electron";
import { musicManager } from '../managers/musicManager';


ipcMain.handle('app:music:getAvalibleAlbums', async () => {
    try{
        return await musicManager.getAvalibeAlbums();
    } catch(err) {
        console.log(err);
    }
});

ipcMain.handle("app:music:getAvalibleMusicList", async (_evt, albumName:string) => {
    try{
        return await musicManager.getAvalibeMusic(albumName);
    } catch(err) {
        console.log(err);
    }
});