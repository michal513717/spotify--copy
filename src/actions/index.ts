class ElectronActions {

    public async login () {
        return await window.electron.auth.login();
    }

    public async register(){
        return await window.electron.auth.register();
    }
}

export const electronActions = new ElectronActions();