import React from "react";
import { Box, useColorModeValue } from '@chakra-ui/react';

const Nav: React.FC = () => {
    const backgroundColor = useColorModeValue('blackAlpha.800', 'gray.800');

    return(
        <Box bg={backgroundColor}>
            
        </Box>
    )
};

export default Nav;