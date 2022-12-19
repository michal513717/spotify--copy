import { ipcMain } from "electron";
import { playListManager } from '../managers/playListManager'


//to remake
ipcMain.handle('app:playList:create', async (_evt, playList:string[]) => {
    try{
        await playListManager.createPlaylist(playList); 
    } catch(err){
        console.error(err);
    }
});

ipcMain.handle('app:playList:get', async () => {
    try{
        // await pla
    } catch(err){

    }
})