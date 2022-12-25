import React, { useCallback, useEffect } from 'react'
import { GridItem, Grid, Box } from '@chakra-ui/react';
import { useStore } from '@/store';
import { useAuthActions } from '@/hooks/useAuthActions';
import SideBar from '../sideBar';
import MainSection from '../mainSection';
import SocialPanel from '../socialPanel';

const MainView: React.FC = () => {
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
                        gridGap={'10px'}
                        minHeight={'100vh'}
                        gridTemplateAreas={`"sidebar main social"`}
                        gridTemplateRows={'100%'}
                        gridTemplateColumns={'200px auto 200px'}
                    >
                        <GridItem area={'sidebar'}>
                            <SideBar/>
                        </GridItem>

                        <GridItem area={'main'}>
                            <MainSection/>
                        </GridItem>


                        <GridItem area={'social'}>
                            <SocialPanel/>
                        </GridItem>

                    </Grid>
                </>
            ) : (
                <Box>Loading ....</Box>
            )
            }
            
        </>
    )
}

export default MainView;