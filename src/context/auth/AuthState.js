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

      setLoading(false);

      //   const role = data.role;
      //   setRole(role);
      //   role === 1 && setAuthUser({ ...authUser, isAdmin: true });
      //   role === 2 && setAuthUser({ ...authUser, isTeacher: true });
      //   role === 3 && setAuthUser({ ...authUser, isStudent: true });
      return data;
    } catch (error) {
      console.log(error.response.data);
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
