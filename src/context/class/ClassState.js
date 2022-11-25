import React,{useState} from "react";
import axios from "axios";
import ClassContext from "./ClassContext";
import AlertContext from "../alert/AlertContext";
import { useContext } from "react";

const ClassState = (props) => {
    const alertcontext=useContext(AlertContext)
    const { setAlert} =alertcontext
    const [classData, setClassData]=useState([])
    const [sectionsData,setSectionData]=useState([])
    const [singlClassData,setSingleClassData]=useState({})
    const [singlSectionData,setSingleSectionData]=useState({})

  const addClass = async (classData) => {
    try {
        console.log(classData)
        const { data } = await axios.post(
        "https://powerful-taiga-74684.herokuapp.com/api/v1/class/",
        classData
      );
        
      setAlert({ visible: true, mesg:data});

      return data;
    } catch (error) {
        setAlert({ visible: true, mesg:error.response.data.message});

    }
  };
  const getSingleClass = async (id) => {
    try {
     const { data } = await axios.get(
        `https://powerful-taiga-74684.herokuapp.com/api/v1/class/${id}`
      );
      console.log(data)
      setAlert({visible:true,mesg:"fetched"})
      setSingleClassData(data)
      

    } catch (error) {
      setAlert({ visible: true, mesg:error.response.data.message});

        console.log(error)
    }
  };
  const updateClass = async (classData,id) => {
    try {
        const { data } = await axios.patch(
        `https://powerful-taiga-74684.herokuapp.com/api/v1/class/${id}`,
        classData
      );
        
      setAlert({ visible: true, mesg:data});
      console.log(data)
      return data;
    } catch (error) {
      setAlert({ visible: true, mesg:error.response.data.message});

    }
  };
  const deleteClass = async (id) => {
    try {
     const { data } = await axios.delete(
        `https://powerful-taiga-74684.herokuapp.com/api/v1/class/${id}`
      );
      setAlert({ visible: true, mesg:data});

      console.log(data)
    
      
    } catch (error) {
      setAlert({ visible: true, mesg:error.response.data.message});

    }
  };

  const getAllClasses = async () => {
    try {
      const { data } = await axios.get(
        "https://powerful-taiga-74684.herokuapp.com/api/v1/class/"
      );
      console.log(data)
      setClassData(data)
    

      
    } catch (error) {
        setAlert({ visible: true, mesg:error.response.data.message});

    }
  };
  const addSetion = async (sectionData) => {
    try {
        console.log(sectionData)
        const { data } = await axios.post(
        "https://powerful-taiga-74684.herokuapp.com/api/v1/section/create",
        sectionData
      );
        
      setAlert({ visible: true, mesg:"section added success fuly"});

    } catch (error) {
        setAlert({ visible: true, mesg:error.response.data.message});

    }
  };
  const getAllSections = async () => {
    try {
      const { data } = await axios.post(
        "https://powerful-taiga-74684.herokuapp.com/api/v1/section/sections"
      );
      setSectionData(data)


      
    } catch (error) {
        setAlert({ visible: true, mesg:error.response.data.message});

    }
  };
  const getSectionsAgainstClass=async(classId)=>{
    try{
      const {data}  = await axios.get(
        `https://powerful-taiga-74684.herokuapp.com/api/v1/section/${classId}/all`
      );
      console.log(data)
      return data
    }
    catch(error){
      setAlert({ visible: true, mesg:error.response.data.message});

    }
  }
  
  const getSingleSection = async (id) => {
    try {
     const { data } = await axios.get(
        `https://powerful-taiga-74684.herokuapp.com/api/v1/section/${id}`
      );
      setSingleSectionData(data)
      setAlert({ visible: true, mesg:""});


    } catch (error) {
      setAlert({ visible: true, mesg:error.response.data.message});

    }
  };
  const updateSection = async (sectionData,id) => {
    try {
        const { data } = await axios.patch(
        `https://powerful-taiga-74684.herokuapp.com/api/v1/section/${id}`,
        sectionData
      );
        
      setAlert({ visible: true, mesg:data});
    } catch (error) {
      setAlert({ visible: true, mesg:error.response.data.message});

    }
  };
  const deleteSection = async (id) => {
    try {
     const { data } = await axios.delete(
        `https://powerful-taiga-74684.herokuapp.com/api/v1/section`,{params:id}
      );
      setAlert({ visible: true, mesg:data});

      
    } catch (error) {
      setAlert({ visible: true, mesg:error.response.data.message});

    }
  };
  return (
    <ClassContext.Provider
      value={{
        addClass,
        getAllClasses,
        classData,
        addSetion,
        deleteClass,
        updateClass,
        getSingleClass,
        singlClassData,
        getAllSections,
        sectionsData,
        singlSectionData,
        getSingleSection,
        updateSection,
        getSectionsAgainstClass,
        deleteSection

      }}
    >
      {props.children}
    </ClassContext.Provider>
  );
};



export default ClassState;
