import { ipcMain } from "electron";
import { IAuthData } from "../../../models";
import { authManager } from './../managers/authManager';


ipcMain.handle("app:auth:login", async (_event, authData:IAuthData): Promise<boolean> => {
    try{
        return await authManager.login(authData);
    } catch (error) {
        console.error(error);
        return;
    }
})

ipcMain.handle("app:auth:register", async (_event, authData:IAuthData): Promise<boolean> => {
    try{
        return await authManager.register(authData);
    } catch (error) {
        console.error(error);
        return;
    }
})

