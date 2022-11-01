import React, { useCallback, useEffect } from 'react'
import { GridItem, Grid, Flex, Switch, useColorMode } from '@chakra-ui/react';
// import Nav from '../nav';
import { useNavigate } from 'react-router-dom';
import AudioBar from '../audioBar';
import { useStore } from '@/store';

const MainView: React.FC = () => {
    const { isLogged } = useStore();
    const navigator = useNavigate();

    const { toggleColorMode } = useColorMode();

    useEffect(() => {

        if (isLogged === false) {
            navigator('/login');
        }

    }, [isLogged])

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