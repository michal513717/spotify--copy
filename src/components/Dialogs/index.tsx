import React from "react";
import { AuthErrorDialog } from './authErrorDialog' 


// all dialogs will store there!
// dialogs are exported to main page
const Dialogs:React.FC = () => {

  return (
    <>
      <AuthErrorDialog/>
    </>
  );
};

export default Dialogs;