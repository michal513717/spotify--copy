import { useStore } from "@/store";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { electronActions } from '@/actions'

export function useAuthActions() {
    const { isLogged, setAvalibleAlbumsList } = useStore();
    const [ canRender, setCanRender ] = useState<boolean>(false);
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
 
        const avalibleAlbumsList = await electronActions.getAvalibleAlbums();
        setAvalibleAlbumsList(avalibleAlbumsList);
        setCanRender(true);
    },[])

    return {checkStatus, canRender};
}
