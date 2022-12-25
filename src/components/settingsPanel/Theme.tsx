import { Box, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

const ThemeSettings = () => {

  const { toggleColorMode } = useColorMode();


  return (
    <Box>
      <Switch
        pos={"absolute"}
        top={0}
        right={0}
        onChange={toggleColorMode} />
    </Box>
  )
}

export default ThemeSettings;