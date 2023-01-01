import React from "react";
import AuthErrorDialog from './authErrorDialog' 
import UploadFileDialog from "./uploadFileDialog";
import SettingsDialog from "./settingsDialog";

// all dialogs will store there!
// dialogs are exported to main page
const Dialogs:React.FC = () => {

  return (
    <>
      <AuthErrorDialog/>
      <UploadFileDialog/>
      <SettingsDialog/>
    </>
  );
};

export default Dialogs;