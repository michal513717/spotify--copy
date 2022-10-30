import { useCallback, useEffect, useState } from 'react';
import React from 'react';
import MainView from './components/main';
import Dialogs from '@/components/Dialogs';
import LoginPage from './components/PreloadPage/LoginPage';
import RegisterPage from './components/PreloadPage/RegisterPage';
import { useToast } from '@chakra-ui/react';
import {IhandleAppToast} from 'models';

type handleAppToastType =(...args:IhandleAppToast[]) => void;

const App: React.FC = () => {
  const toast = useToast();

  const handleAppToast = useCallback<handleAppToastType>((...args)=>{

    const title = args[0].title;
    const description = args[0].description;
    const status = args[0].status;

    // title: string;
    // description: string;
    // status: statusToastType;

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
