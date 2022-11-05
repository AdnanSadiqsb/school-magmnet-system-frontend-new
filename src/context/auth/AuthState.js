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
        "https://powerful-taiga-74684.herokuapp.com/api/v1/login",
        userData
      );
      localStorage.setItem("authkey","324dsfs243423rsdf34")
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
