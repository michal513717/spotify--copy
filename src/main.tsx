import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript, extendTheme, type ThemeConfig } from "@chakra-ui/react"; 
import App from './App'
import 'styles/index.css'
import { BrowserRouter } from 'react-router-dom';

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const theme = extendTheme({ config });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)

postMessage({ payload: 'removeLoading' }, '*')
