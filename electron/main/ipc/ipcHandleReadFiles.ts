import { ipcMain } from "electron";
import { readerManager } from './../managers/readerManager';

ipcMain.handle('app:reader:init', async () => {
    try{
        await readerManager.checkExistStoredData();
        return await readerManager.getAvalibeSongList();
    } catch(err) {
        console.log(err);
    }
});