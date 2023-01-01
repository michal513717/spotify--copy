import React, { useCallback } from "react";
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { AddIcon, AttachmentIcon, BellIcon, ChatIcon, StarIcon, SunIcon } from "@chakra-ui/icons";
import { useStore } from "@/store";
import { useOpenDialog } from "@/hooks/useOpenDialog";
import { electronActions } from "@/actions";

const SideBar: React.FC = () => {

    const { setUploadFileDialogOpen } = useOpenDialog();
    const { avalibleAlbumsList, isAdminAccount } = useStore();
    const { setCurrentAlbum, setAvalibleMusicFromCurrentAlbum } = useStore();

    const handleClickAlbum = useCallback( async (albumName:string) => {

        setCurrentAlbum(albumName);
    
        const avalibleMusicList = await electronActions.getAvalibleMusicList(albumName)

        setAvalibleMusicFromCurrentAlbum(avalibleMusicList);
    },[])

    return(
        <Flex 
            height={'100%'}    
            width={'100%'}
            flexDirection={'column'}
            padding={'18px'}
        >
            <Flex
                flexDirection={'column'}
                mt={'16px'}
            >
                {
                    avalibleAlbumsList.map((item, index) => {
                        return <Box marginTop={1} key={item+index} onClick={ () => handleClickAlbum(item)}> {item} </Box>
                    })
                }

                {
                    isAdminAccount ? ( 
                        <>
                            <Box onClick={()=>setUploadFileDialogOpen(true)}> Upload Files </Box>
                        </>
                    ) : (
                        <></>
                    )
                }
            </Flex>

        </Flex>
    )
};

export default SideBar