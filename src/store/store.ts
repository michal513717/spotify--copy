import create from "zustand";
import type { IStore } from "models";

export const useStore = create<IStore>((set) => ({
    state:1,

    action: async (payload) => {
        set((state) => ({...state, payload}))
    },
}));

process.env.NODE_ENV === "development" && useStore.subscribe(console.log);