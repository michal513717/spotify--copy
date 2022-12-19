import React from "react";
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { AddIcon, AttachmentIcon, BellIcon, ChatIcon, StarIcon, SunIcon } from "@chakra-ui/icons";
import { useStore } from "@/store";
import { useOpenDialog } from "@/hooks/useOpenDialog";

const Nav: React.FC = () => {
    const backgroundColor = useColorModeValue('blackAlpha.800', 'gray.900');
    const { setCreatePlaylistDialogOpen } = useOpenDialog();
    const { avalibeAlbumsList } = useStore();

    return(
        <Flex 
            bg={backgroundColor}
            height={'100%'}    
            width={'100%'}
            flexDirection={'column'}
            padding={'18px'}
        >
            <Flex 
                flexDirection={'column'}
            >
                <Box m={"15px 0 12px 0"}>
                    <AttachmentIcon mr={'12px'}/> Home
                </Box>
                <Box mb={3}>
                    <BellIcon mr={'12px'}/> Search
                </Box>
                <Box mb={3}>
                    <ChatIcon mr={'12px'}/> Library
                </Box>
            </Flex>
            
            <Flex 
                flexDirection={'column'}
                margin={'20px 0 20px 0'}
            >
                <Box marginTop={'10px'} onClick={() => setCreatePlaylistDialogOpen(true)}>
                    <AddIcon mr={'12px'}/> Create playlist
                </Box>
                
                <Box marginTop={'10px'}>
                    <StarIcon mr={'12px'}/> Favourite
                </Box>
            </Flex>
            <hr/>
            <Flex
                flexDirection={'column'}
                mt={'16px'}
            >
                {
                    avalibeAlbumsList.map((item, index) => {
                        return <Box marginTop={1} key={item+index}> {item} </Box>
                    })
                }
            </Flex>

        </Flex>
    )
};

export default Nav;