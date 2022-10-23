import create from "zustand";
import type { IStore } from "models";

export const useStore = create<IStore>((set) => ({
    isLogged: false,
    currentAudioName: '',
    currentAudioDetails: {},

    setLoginStatus: async (status) => {
        set((state) => ({...state, isLogged: status}))
    },
    setCurrentAudioName: async (name) => {
        set((state) => ({...state, currentAudioName: name}))
    },
    setCurrentAudioDetails: async (details) => {
        set((state) => ({...state, currentAudioDetails: details}))
    }
}));

process.env.NODE_ENV === "development" && useStore.subscribe(console.log);