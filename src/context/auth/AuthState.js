import React, { useState } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
const AuthState = (props) => {
  const [loading, setLoading] = useState(false);
  const [authUser, setAuthUser] = useState({
    isAdmin: false,
    isStudent: false,
    isTeacher: false,
  });

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
        
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
