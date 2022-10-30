import { useCallback, useEffect, useState } from 'react';
import React from 'react';
import MainView from './components/main';
import Dialogs from '@/components/Dialogs';
import LoginPage from './components/PreloadPage/LoginPage';
import RegisterPage from './components/PreloadPage/RegisterPage';
import { useToast } from '@chakra-ui/react';

type handleAppToastType = <T>(args:T) => void

const App: React.FC = () => {
  const toast = useToast();

  const handleAppToast = useCallback<handleAppToastType>(({title, description, status})=>{
    toast({
      title,
      description,
      status,
      duration: 500,
      isClosable: true
    })
  },[toast])

  useEffect(()=>{
    window.electron.addListener("app:receive:toast", handleAppToast);

    return () => {
      window.electron.removeListener("app:receive:toast", handleAppToast);
    };
  },[handleAppToast])

  return (
    <>
    {/* <RegisterPage/> */}
      <LoginPage/>
      {/* <MainView/> */}
      {/* <Dialogs/> */}
    </>
  )
}

export default App
