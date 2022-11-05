import React,{useEffect, useContext} from 'react';
import AlertContext from '../../context/alert/AlertContext';
export default function Alert() {
    const context = useContext(AlertContext);
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
