import { useStore } from "@/store";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { electronActions } from '@/actions'

export function useAuthActions() {
    const { isLogged, setAvalibeAlbumsList } = useStore();
    const navigator = useNavigate();

    const checkStatus = useCallback(()=>{

        if( isLogged === false) {
            navigator('/login');
        }

        if( isLogged === true) {
            getAlbumsCallback();
        }

    }, [isLogged])

    const getAlbumsCallback = useCallback(async()=>{

        const avalibleAlbumsList = await electronActions.getAlbums();
        setAvalibeAlbumsList(avalibleAlbumsList);
    },[])

    return checkStatus;
}
