import React, { Fragment } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import ClassContext from '../../context/class/ClassContext';
import AlertContext from '../../context/alert/AlertContext';
import {DataGrid} from '@material-ui/data-grid'

import { useEffect } from 'react';
function AddClass() {
    const alertContext=useContext(AlertContext)
    const {alert}=alertContext
    const clasContext=useContext(ClassContext)
    const {addClass,getAllClasses,classData,deleteClass,updateClass}=clasContext
    const [clasName, setClassName]=useState("")
    const [section,setSection]=useState(0)
    const [status,setStatus]=useState("")
    const submitHandler=(e)=>{
        e.preventDefault()
        
        if(status)
        {

            addClass({name:clasName,status:status})
        }
        else{
            addClass({name:clasName})

        }
        restHandler()

    }
    useEffect(()=>{
        getAllClasses()
    },[alert])
    const restHandler=()=>{
       setClassName("")
       setStatus("")
       setSection(0)
    }
    const deleteClassHandler=(id)=>{
        const option=window.confirm(`Are you sure to delete the student`)
        if(option===true)
        {
            deleteClass(id)
           
        }
    }
   
    const columns=[
        {field:'id',headName:'Admission ID',  hide:true},
        {field:'No', minWidth:50},

        {field:'name',headName:'name', minWidth:200,},
        {field:'status',headName:'status', minWidth:150},
        

        {field:'action', headerName:'Action',  minWidth:250, sortable:false, renderCell:(params)=>{
            return( 
                <>
                    <Link class="dropdown-item" to="#" onClick={()=>deleteClassHandler(params.getValue(params.id,"id"))}><i
                            class="fas fa-times text-orange-red"></i>Delete</Link>
                    <Link class="dropdown-item" to={`/updateClass/${params.getValue(params.id,"id")}`}><i
                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                    
            
                 </>
                )
            } 
        }
    ]
        

    
    const rows=[]
    classData && classData.forEach((item,index)=>{
            rows.push({
                id:item._id,
                No:index+1,
                name:item.name,
                status:item.status
   
            })
        })
  return (
    <Fragment>
         <div class="dashboard-content-one">
                <div class="breadcrumbs-area">
                    <h3>Classes</h3>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>Add New Class</li>
                    </ul>
                </div>
            
                <div class="card height-auto">
                    <div class="card-body">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>Add New Class</h3>
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
                                    <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                    <button type="reset" class="btn-fill-lg bg-blue-dark btn-hover-yellow" onClick={restHandler}>Reset</button>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
                <div class="card height-auto">
                    <div class="card-body">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>All Classes Data</h3>
                            </div>
                          
                        </div>
                        <form class="mg-b-20">
                            <div class="row gutters-8">
                                <div class="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="Search by Roll ..." class="form-control"/>
                                </div>
                                <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="Search by Name ..." class="form-control"/>
                                </div>
                                <div class="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="Search by Class ..." class="form-control"/>
                                </div>
                                <div class="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                                    <button type="submit" class="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                                </div>
                            </div>
                        </form>
                        <div class="table-responsive" id='DivIdToPrint'>
                            <table class="table display data-table text-nowrap">
                            <div className="myOrderPage" >
                                <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={10}
                                disableSelectionOnClick
                                className='MyOrderTable'
                                autoHeight
                                style={{'fontSize':'1.4rem', 'minHeight':'50vh'}}
                                />


                            </div>
                            </table>
                        </div>
                    </div>
                </div>
                <footer class="footer-wrap-layout1">
                    <div class="copyright">© Copyrights <a href="#">akkhor</a> 2019. All rights reserved. Designed by <a href="#">PsdBosS</a></div>
                </footer>
            </div>
    </Fragment>
  )
}

export default AddClass
