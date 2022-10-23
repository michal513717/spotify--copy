import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useStore } from "@/store";

const AudioBar:React.FC = () => {
    const { currentAudioName, currentAudioDetails } = useStore();
    const backgroundColor = useColorModeValue('blackAlpha.800', 'gray.800');

    useEffect(()=>{

    },[currentAudioName, currentAudioDetails])

    return(
        <Box
            w='100%'
            h="100%"
            bg={backgroundColor}
        >
            
            <audio/>
        </Box>
    )
}

export default AudioBar;