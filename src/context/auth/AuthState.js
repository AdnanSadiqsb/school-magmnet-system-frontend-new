import React, { useState } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import { data } from "jquery";
const AuthState = (props) => {
  const [alert, setAlert] = useState({
    visible: false,
    mesg: "",
  });
  const [loading, setLoading] = useState(false);

  const [authUser, setAuthUser] = useState({
    isAdmin: false,
    isStudent: false,
    isTeacher: false,
  });
  const [role, setRole] = useState(0);

  const loginUser = async (userData) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/login",
        userData
      );
        console.log(data)
      setLoading(false);


      return data;
    } catch (error) {
      return error;
    }
  };
  return (
    <AuthContext.Provider
      value={{
        loginUser,
        authUser,
        setAuthUser,
        loading,
        role,
        alert,
        setAlert,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
