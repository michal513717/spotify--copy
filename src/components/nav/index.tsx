import React, { createElement, useCallback, useEffect, useState } from "react";
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { SunIcon } from "@chakra-ui/icons";
import { useStore } from "@/store";

const Nav: React.FC = () => {
    const backgroundColor = useColorModeValue('blackAlpha.800', 'gray.800');
    const { avalibeAlbumsList } = useStore();
    const [ albums, setAlbums ] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        createAlbums();
    }, [avalibeAlbumsList])
 
    const createAlbums = useCallback(()=> {
        for(let key of Object.keys(avalibeAlbumsList)){
            setAlbums((prevState:React.ReactNode[]) => [...prevState, <Box key={key}> {key} </Box>]);
        }
    }, [avalibeAlbumsList])

    return(
        <Flex bg={backgroundColor}>
            <SunIcon/>
            <SunIcon/>
            <SunIcon/>

            <Flex
                direction={"column"}
            >

                {  
                    albums
                }
            </Flex>

        </Flex>
    )
};

export default Nav;