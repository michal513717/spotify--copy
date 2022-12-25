import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useStore } from "@/store";

const AudioBar:React.FC = () => {
    const { currentAudioName } = useStore();
    const backgroundColor = useColorModeValue('blackAlpha.700', 'gray.800');

    useEffect(()=>{

    },[currentAudioName])

    return(
        <Box
            w='100%'
            h="100%"
            bg={backgroundColor}
        >
            <audio controls/>
        </Box>
    )
}

export default AudioBar;