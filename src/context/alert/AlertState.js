import React, { useState } from "react";
import AlertContext from "./AlertContext";
const AlertState = (props) => {
  const [alert, setAlert] = useState({
    visible: false,
    mesg: "",
  });

  return (
    <AlertContext.Provider
      value={{
        alert,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
