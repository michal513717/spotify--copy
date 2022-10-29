import React, { useCallback } from 'react'
import { GridItem, Grid, Flex, Switch, useColorMode } from '@chakra-ui/react';
import Nav from '../nav';
import AudioBar from '../audioBar';

const MainView: React.FC = () => {

    const { toggleColorMode } = useColorMode();

    return (
        <><
            Grid
                h='100vh'
                w='100vw'
                gridTemplateRows='90vh 10vh'
                gridTemplateColumns='240px 1fr'
                gap={0}
            >
                
                <Nav />
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