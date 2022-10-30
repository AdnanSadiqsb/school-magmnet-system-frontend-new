import React,{useEffect, useContext} from 'react';
import AuthContext from "../../context/auth/AuthContext";
export default function Alert() {
    const context = useContext(AuthContext);
    const { alert, setAlert } = context;

    useEffect(() => {
      setTimeout(() => {
        setAlert({ visible: false, mesg: "" });
      }, 3000);
    }, []);

  return (
    <div className="alert">
      <p>{alert.mesg}</p>
    </div>
  );
}
