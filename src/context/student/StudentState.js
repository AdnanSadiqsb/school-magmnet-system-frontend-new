import React,{useState} from "react";
import axios from "axios";
import StudentContext from "./StudentContext";
const StudentState = (props) => {

  const [studentDetail, setStudentDetail]=useState({})
  const [studentData, setStudentData]=useState([])
  
  const registerStudent = async (studentData) => {
    try {
        const { data } = await axios.post(
        "https://powerful-taiga-74684.herokuapp.com/api/v1/student/",
        studentData
      );
        

      console.log(data)
      return data;
    } catch (error) {
        console.log(error)
    }
  };
  const getAllStudents = async () => {
    try {
      const { data } = await axios.get(
        "https://powerful-taiga-74684.herokuapp.com/api/v1/student/"
      );
      console.log(data)
      setStudentData(data)
      
    } catch (error) {
        console.log(error)
    }
  };
  const updateStudent = async (studentData,id) => {
    try {
        const { data } = await axios.patch(
        `https://powerful-taiga-74684.herokuapp.com/api/v1/student/${id}`,
        studentData
      );
      // setAlert({ visible: true, mesg:data});


      console.log(data)
      return data;
    } catch (error) {
      // setAlert({ visible: true, mesg:error.response.data.message});

    }
  };
  const getSingleStudent = async (id) => {
    try {
     const { data } = await axios.get(
        `https://powerful-taiga-74684.herokuapp.com/api/v1/student/${id}`
      );
      console.log(data)
      setStudentDetail(data)
    } catch (error) {
        console.log(error)
    }
  };
  const deleteStudent = async (id) => {
    try {
     const { data } = await axios.delete(
        `https://powerful-taiga-74684.herokuapp.com/api/v1/student/${id}`
      );
      console.log(data)
    
      
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <StudentContext.Provider
      value={{
        registerStudent,
   
        getAllStudents,
        studentData,
        deleteStudent,
        studentDetail,
        getSingleStudent,
        updateStudent
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
