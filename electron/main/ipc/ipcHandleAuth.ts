import { ipcMain } from "electron";
import { authManager } from './../managers/authManager';

ipcMain.handle("app:auth:login", async () => {
    try{
        return await authManager.login();
    } catch (error) {
        console.error(error);
        return;
    }
})

ipcMain.handle("app:auth:register", async () => {
    try{
        return await authManager.register();
    } catch (error) {
        console.error(error);
        return;
    }
})

