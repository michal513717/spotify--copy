import { useState } from 'react';
import React from 'react';
import MainView from './components/main';
import Dialogs from '@/components/Dialogs';
import LoginPage from './components/PreloadPage/LoginPage';
import RegisterPage from './components/PreloadPage/RegisterPage';

const App: React.FC = () => {

  return (
    <>
    <RegisterPage/>
      {/* <LoginPage/> */}
      {/* <MainView/> */}
      {/* <Dialogs/> */}
    </>
  )
}

export default App
