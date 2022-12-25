import { Box } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useStore } from "@/store";


const RightSidePanelT: React.FC = () => {
    const { avalibleMusicFromCurrentAlbum } = useStore();
    const { setCurrentAudioName } = useStore();

    return (
        <Box>
            {
                avalibleMusicFromCurrentAlbum.length > 0 ? (
                    avalibleMusicFromCurrentAlbum.map((audioName) => {
                        return <Box key={audioName} onClick={()=>setCurrentAudioName(audioName)}> { audioName } </Box>
                    })
                ) : (
                    <></>
                )
            }
        </Box>
    )
}

export default RightSidePanelT