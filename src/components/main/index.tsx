import React, { useCallback, useEffect } from 'react'
import { GridItem, Grid, Switch, useColorMode, Box } from '@chakra-ui/react';
import AudioBar from '../audioBar';
import RightSidePanelT from '../RightSidePanel';
import { useStore } from '@/store';
import { useAuthActions } from '@/hooks/useAuthActions';
import Nav from '../nav';

const MainView: React.FC = () => {
    const { toggleColorMode } = useColorMode();
    const { isLogged } = useStore();
    const {checkStatus, canRender} = useAuthActions();

    useEffect(()=>{

        checkStatus();
    },[isLogged])

    return (
        <>
            { canRender ? (
                <><Grid
                    h='100vh'
                    w='100vw'
                    gridTemplateRows='90vh 10vh'
                    gridTemplateColumns='240px 1fr'
                    gap={0}
                >
                    <GridItem>
                        <Nav />
                    </GridItem>

                    <GridItem bg={'blue'}>
                        <RightSidePanelT />
                    </GridItem>

                    <GridItem colSpan={2}>
                        <AudioBar />
                    </GridItem>
                </Grid><Switch
                        pos={"absolute"}
                        top={0}
                        right={0}
                        onChange={toggleColorMode} /></>
            ) : (
                <Box>Loading ....</Box>
            )
            }
            
        </>
    )
}

export default MainView;