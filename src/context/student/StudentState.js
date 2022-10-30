import React from "react";
import axios from "axios";
import StudentContext from "./AuthContext";
const StudentState = (props) => {


  const registerStudent = async (studentData) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/login",
        studentData
      );
        


      return data;
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <StudentContext.Provider
      value={{
        registerStudent
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
