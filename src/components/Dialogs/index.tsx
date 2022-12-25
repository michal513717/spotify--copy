import React from "react";
import AuthErrorDialog from './authErrorDialog' 
import CreatePlaylistDialog from "./createPlaylistDialog";
import SettingsDialog from "./settingsDialog";

// all dialogs will store there!
// dialogs are exported to main page
const Dialogs:React.FC = () => {

  return (
    <>
      <AuthErrorDialog/>
      <CreatePlaylistDialog/>
      <SettingsDialog/>
    </>
  );
};

export default Dialogs;