import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {useParams, Link} from 'react-router-dom'
import ClassContext from '../../context/class/ClassContext';
import AlertContext from '../../context/alert/AlertContext';
function UpdateSection() {
    const alertContext=useContext(AlertContext)
    const {alert}=alertContext
    const {id}=useParams()
    const navigate=useNavigate()
    const [clasName, setClassName]=useState("")
    const [status,setStatus]=useState("")
    const classConstext=useContext(ClassContext)
    const { singlSectionData,getSingleSection,updateSection}=classConstext
    const submitHandler=(e)=>{
        e.preventDefault()
        updateSection({name:clasName,status:status},id)
        navigate('/section')
        restHandler()
    }
    useEffect(()=>{

        getSingleSection(id) 
    },[])
    useEffect(()=>{
        
        singlSectionData.name && setClassName(singlSectionData.name)
        singlSectionData.status && setStatus(singlSectionData.status)
        
    },[alert])
    const restHandler=()=>{
       setClassName("")
       setStatus("")
    }
  return (
    <Fragment>
         <div class="dashboard-content-one">
                <div class="breadcrumbs-area">
                    <h3>Update Section</h3>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>Update section</li>
                    </ul>
                </div>
                <div class="card height-auto">
                    <div class="card-body">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>Update Section</h3>
                            </div>
                           
                        </div>
                        <form class="new-added-form" onSubmit={submitHandler}>
                            <div class="row">
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Class Name</label>
                                    <input type="text" required placeholder="" class="form-control" value={clasName} onChange={(e)=>setClassName(e.target.value)} />
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>status </label>
                                    <select class="select2" name='status' value={status} onChange={(e)=>setStatus(e.target.value)}>
                                        <option value="">Choose Option *</option>
                                        
                                        <option value="Active">Active</option>
                                        <option value="Not Active">Not active</option>
                                      
                                    </select>
                                </div>
                                
                                
                              
                               
                            
                                <div class="col-md-6 form-group"></div>
                                <div class="col-12 form-group mg-t-8">
                                    <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Update</button>
                                    <Link type="reset" class="btn-fill-lg bg-blue-dark btn-hover-yellow" to={'/section'}>Back</Link>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            
               
                <footer class="footer-wrap-layout1">
                    <div class="copyright">© Copyrights <a href="#">akkhor</a> 2019. All rights reserved. Designed by <a href="#">PsdBosS</a></div>
                </footer>
            </div>
    </Fragment>
  )
}

export default UpdateSection
