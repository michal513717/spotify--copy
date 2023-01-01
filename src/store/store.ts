import create from "zustand";
import type { IStore } from "models";

export const useStore = create<IStore>((set) => ({
    isLogged: false,
    avalibleAlbumsList: [],
    avalibleMusicFromCurrentAlbum: [],
    currentAlbum: '',
    currentAudioName: '',

    isAdminAccount: false,
    isDialogOpen: false,
    isUploadFileDialogOpen: false,
    isSettingsDialogOpen: false,

    setAvalibleAlbumsList: async (files) => {
        set((state) => ({ ...state, avalibleAlbumsList: files }))
    },
    setAvalibleMusicFromCurrentAlbum: async (musicList: string[]) => {
        set((state) => ({ ...state, avalibleMusicFromCurrentAlbum: musicList }))
    },

    // ---------- Dialogs ---------- 
    setDialogOpen: async (status) => {
        set((state) => ({ ...state, isDialogOpen: status }))
    },
    setUploadFileDialogOpen: async (status) => {
        set((state) => ({ ...state, isUploadFileDialogOpen: status }))
    },
    setSettingsPanelDialogOpen: async (status) => {
        set((state) => ({ ...state, isSettingDialogOpen: status }))
    },
    // -----------------------------
    setLoginStatus: async (status) => {
        set((state) => ({ ...state, isLogged: status }))
    },
    setAdminAccount: async (status) => {
        set((state) => ({ ...state, isAdminAccount: status }))
    },
    setCurrentAlbum: async (currentAlbum) => {
        set((state) => ({ ...state, currentAlbum: currentAlbum }))
    },
    setCurrentAudioName: async (name) => {
        set((state) => ({ ...state, currentAudioName: name }))
    },
}));

process.env.NODE_ENV === "development" && useStore.subscribe(console.log);