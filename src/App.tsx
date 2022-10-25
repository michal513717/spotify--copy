import { useState } from 'react';
import React from 'react';
import MainView from './components/main';
import { Dialogs } from '@/components/Dialogs';

const App: React.FC = () => {

  return (
    <>
      <MainView/>
      <Dialogs/>
    </>
  )
}

export default App
