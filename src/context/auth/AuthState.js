import React, { useState } from "react";
import axios from 'axios'
import AuthContext from "./AuthContext";
import { data } from "jquery";
const AuthState=(props)=>{
    const [loading, setLoading]=useState(false)
    const [success,setSuccess]= useState(false)
    const [error, setError]=useState('')
    const [authUser, setAuthUser]=useState({
        isAdmin:false,
        isStudent:false,
        isTeacher:false
    }) 
    const [role,setRole]=useState(0)
    
  const loginUser=async (userData)=>{
    try{
        setLoading(true)
        const {data} = await axios.post("http://localhost:5000/api/v1/login",userData);

        setSuccess(data.success)
        setLoading(false)
      
        
        const {role}=data.user
        setRole(role)
        role===1 && setAuthUser({...authUser, isAdmin:true})
        role===2&&setAuthUser({...authUser, isTeacher:true})
        role===3&&setAuthUser({...authUser, isStudent:true})
    }
    catch(error){
        setError(error.response.data.error)
        console.log(error.response.data.error)
    }

  }
    return (
        <AuthContext.Provider value={{loginUser, error, success, authUser, loading, role}} >
            {
                props.children
            }
        </AuthContext.Provider>
    )
}


export default AuthState