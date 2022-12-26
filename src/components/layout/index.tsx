import React, { useCallback, useEffect } from 'react'
import { GridItem, Grid, Box, useColorModeValue } from '@chakra-ui/react';
import { useStore } from '@/store';
import { useAuthActions } from '@/hooks/useAuthActions';
import SideBar from '../sideBar';
import MainSection from '../mainSection';
import SocialPanel from '../socialPanel';
import AudioBarFooter from '../audioBarFooter';

const MainView: React.FC = () => {

    const sideBarBackgroundColor = useColorModeValue('#000', '#000');
    const mainBackgroundColor = useColorModeValue('#0e0e0e', '#0e0e0e');

    const { isLogged } = useStore();
    const {checkStatus, canRender} = useAuthActions();
    
    useEffect(()=>{

        checkStatus();
    },[isLogged])

    return (
        <>
            { canRender ? (
                <>
                    <Grid
                        backgroundColor={sideBarBackgroundColor}
                        gridGap={'10px'}
                        minHeight={'100vh'}
                        gridTemplateAreas={`"sidebar main social"`}
                        gridTemplateRows={'100%'}
                        gridTemplateColumns={'200px auto 200px'}
                    >
                        <GridItem area={'sidebar'} backgroundColor={sideBarBackgroundColor}>
                            <SideBar/>
                        </GridItem>

                        <GridItem area={'main'} backgroundColor={mainBackgroundColor}>
                            <MainSection/>
                        </GridItem>


                        <GridItem area={'social'} backgroundColor={sideBarBackgroundColor}>
                            <SocialPanel/>
                        </GridItem>

                    </Grid>
                    
                    <AudioBarFooter/>
                </>
            ) : (
                <Box>Loading ....</Box>
            )
            }
            
        </>
    )
}

export default MainView;