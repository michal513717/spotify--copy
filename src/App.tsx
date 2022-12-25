import { useCallback, useEffect, useState } from 'react';
import React from 'react';
import Dialogs from '@/components/Dialogs';
import { useNavigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { IhandleAppToast } from 'models';
import { useStore } from '@/store';
import LoginPage from '@/components/PreloadPage/LoginPage';
import RegisterPage from '@/components/PreloadPage/RegisterPage';
import MainView from './components/layout';

type handleAppToastType = <T>(...args: T[]) => void;

// const LazyLoginPage = React.lazy(()=> import('./components/PreloadPage/LoginPage'));
// const LazyRegisterPage = React.lazy(()=> import('./components/PreloadPage/RegisterPage'));
// const LazyMainViewPage = React.lazy(()=> import('./components/main'));

const Loading = () => <p>Loading ...</p>;

const App: React.FC = () => {
  const { isLogged } = useStore();
  const navigate = useNavigate();
  const toast = useToast();

  const handleAppToast = useCallback<handleAppToastType>((...args: IhandleAppToast[]) => {

    const title = args[0].title;
    const description = args[0].description;
    const status = args[0].status;

    toast({
      title,
      description,
      status,
      duration: 500,
      isClosable: true
    })
  }, [toast])

  useEffect(() => {
    window.electron.addListener("app:receive:toast", handleAppToast);

    return () => {
      window.electron.removeListener("app:receive:toast", handleAppToast);
    };
  }, [handleAppToast])


  return (
    <>
      <React.Suspense fallback={<Loading />} />
      <Routes>
        {/* <Route path="/login" element={<LazyLoginPage/>}/>
          <Route path="/register" element={<LazyRegisterPage/>}/>
          <Route path="/" element={<LazyMainViewPage/>}/> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<MainView />} />
      </Routes>
      <Dialogs />
    </>
  )
}

export default App
