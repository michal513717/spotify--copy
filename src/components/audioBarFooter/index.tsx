import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useStore } from "@/store";

const AudioBarFooter:React.FC = () => {
    const { currentAudioName } = useStore();
    const backgroundColor = useColorModeValue('#202020', '#202020');

    useEffect(()=>{

        
    },[currentAudioName])

    return(
        <Box
            position={'fixed'}
            display={'grid'}
            height={'100px'}
            width={'100%'}
            gridTemplateColumns={'250px 1fr 60px'}
            bottom={0}
            gridGap={'20px'}
            backgroundColor={backgroundColor}
            padding={'20px 20px 100px'}
        >
            { currentAudioName ? 
                (
                    <>
                        <audio src='http://192.168.100.2:3000/music/eminem/eminemme.mp3' controls/>
                    </>
                ) : (
                    <> 
                        <audio controls/>
                    </>
                )}
            {/* <audio controls/> */}
        </Box>
    )
}

export default AudioBarFooter;