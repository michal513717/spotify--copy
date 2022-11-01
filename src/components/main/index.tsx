import React, { useCallback, useEffect } from 'react'
import { GridItem, Grid, Switch, useColorMode } from '@chakra-ui/react';
import AudioBar from '../audioBar';
import { useStore } from '@/store';
import { useAuthActions } from '@/hooks/useAuthActions';

const MainView: React.FC = () => {
    const { toggleColorMode } = useColorMode();
    const { isLogged } = useStore();
    const checkStatus = useAuthActions();

    useEffect(()=>{
        checkStatus();
    },[isLogged])

    return (
        <>
            <Grid
                h='100vh'
                w='100vw'
                gridTemplateRows='90vh 10vh'
                gridTemplateColumns='240px 1fr'
                gap={0}
            >

                {/* <Nav /> */}
                <GridItem bg={'blue'}></GridItem>

                <GridItem colSpan={2}>
                    <AudioBar />
                </GridItem>
            </Grid>
            <Switch
                pos={"absolute"}
                top={0}
                right={0}
                onChange={toggleColorMode}
            />
        </>
    )
}

export default MainView;