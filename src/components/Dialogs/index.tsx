import React from "react";
import AuthErrorDialog from './authErrorDialog' 
import CreatePlaylistDialog from "./createPlaylistDialog";

// all dialogs will store there!
// dialogs are exported to main page
const Dialogs:React.FC = () => {

  return (
    <>
      <AuthErrorDialog/>
      <CreatePlaylistDialog/>
    </>
  );
};

export default Dialogs;