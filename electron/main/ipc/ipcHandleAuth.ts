import { ipcMain } from "electron";
import { IAuthData } from "../../../models";
import { authManager } from './../managers/authManager';

ipcMain.handle("app:auth:login", async (_event, loginData:IAuthData) => {
    try{
        return await authManager.login(loginData);
    } catch (error) {
        console.error(error);
        return;
    }
})

ipcMain.handle("app:auth:register", async (_event, registerData:IAuthData) => {
    try{
        return await authManager.register(registerData);
    } catch (error) {
        console.error(error);
        return;
    }
})

