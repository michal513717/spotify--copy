import { Box } from "@chakra-ui/react";
import React from "react";
import { useStore } from "@/store";


const RightSidePanelT: React.FC = () => {
    const { avalibleMusicFromCurrentAlbum, currentAlbum } = useStore();


    return (
        <Box>
            {
                avalibleMusicFromCurrentAlbum.length > 0 ? (
                    avalibleMusicFromCurrentAlbum.map((audioName) => {
                        return <Box>{audioName}</Box>
                    })
                ) : (
                    <></>
                )
            }
        </Box>
    )
}

export default RightSidePanelT