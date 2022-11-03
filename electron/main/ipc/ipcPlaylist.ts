import { ipcMain, IpcMain } from "electron";
import {playListManager} from '../managers/playListManager'

ipcMain.handle('app:playList:create', async (_evt, playList:string[]) => {
    try{
        await playListManager.createPlaylist(playList); 
    } catch(err){
        console.error(err);
    }
})