import React from 'react'
import { GridItem, Grid, Flex } from '@chakra-ui/react';
import Nav from '../Nav';

const MainView: React.FC  = () =>{

    return(
        <Grid
            h='100vh'
            w='100vw'
            gridTemplateRows='90vh 10vh'
            gridTemplateColumns='240px 1fr'
            gap={0}
        >
            <GridItem bg={'yellow'}></GridItem>
            <GridItem bg={'blue'}></GridItem>
            <GridItem bg={'red'} colSpan={2}></GridItem>
        </Grid>
    )
} 

export default MainView;