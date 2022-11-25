import React, { Fragment } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import ClassContext from '../../context/class/ClassContext';
import AlertContext from '../../context/alert/AlertContext';
import {DataGrid} from '@material-ui/data-grid'

import { useEffect } from 'react';
function AddSection() {
    const alertContext=useContext(AlertContext)
    const {alert}=alertContext
    const clasContext=useContext(ClassContext)
    const {addSetion,getAllClasses,classData,getAllSections, sectionsData}=clasContext
    const [sectionName, setSectionName]=useState("")
    const [status,setStatus]=useState("")
    const [classid, setClassid]=useState("")
    const submitHandler=(e)=>{
        e.preventDefault()
        addSetion({classId:classid, name:sectionName,status:status})
        
        restHandler()

    }
    useEffect(()=>{
        getAllSections()
        getAllClasses()
    },[alert])
    const restHandler=()=>{
       setSectionName("")
       setStatus("")
       setClassid("")
    }
    const rougt=()=>{

    }
    const columns=[
        {field:'id',headName:'Admission ID',  hide:true},
        {field:'No',  minWidth:100},
        {field:'sectionName',headName:'Name', minWidth:200,},
        {field:'status',headName:'Class', minWidth:150},
        

        {field:'action', headerName:'Action',  minWidth:250, sortable:false, renderCell:(params)=>{
            return( 
                <>
                    <Link class="dropdown-item" to="#" onClick={()=>rougt(params.getValue(params.id,"id"))}><i
                            class="fas fa-times text-orange-red"></i>Delete</Link>
                    <Link class="dropdown-item" to={`/section/update/${params.getValue(params.id,"id")}`}><i
                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                    
            
                 </>
                )
            } 
        }
    ]
        

    
    const rows=[]
    sectionsData && sectionsData.forEach((item,index)=>{
            rows.push({
                id:item._id,
                No:index+1,
                sectionName:item.name,
                status:item.status
   
            })
        })
  return (
    <Fragment>
         <div class="dashboard-content-one">
                <div class="breadcrumbs-area">
                    <h3>Sections</h3>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>Add New Section</li>
                    </ul>
                </div>
            
                <div class="card height-auto">
                    <div class="card-body">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>Add New Section</h3>
                            </div>
                           
                        </div>
                        <form class="new-added-form" onSubmit={submitHandler}>
                            <div class="row">
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>section Name</label>
                                    <input type="text" minLength={3} required placeholder="" class="form-control" value={sectionName} onChange={(e)=>setSectionName(e.target.value)} />
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>status </label>
                                    <select class="select2" name='status' value={status} onChange={(e)=>setStatus(e.target.value)} required>
                                        <option value="">Choose Option *</option>
                                        
                                        <option value="Active">Active</option>
                                        <option value="Not Active">Not active</option>
                                      
                                    </select>
                                </div>

                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>class </label>
                                    <select class="select2" name='class' value={classid} onChange={(e)=>setClassid(e.target.value)} required>
                                        <option value="">Choose class *</option>
                                        {
                                            classData.map((item)=>{
                                                return <option key={item._id} value= {item._id}> {item.name}</option>

                                            })
                                        }
                                        
                                      
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
                                <h3>All Students Data</h3>
                            </div>
                            <div class="dropdown">
                                <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                    aria-expanded="false">...</a>

                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-times text-orange-red"></i>Close</a>
                                    
                                    <a class="dropdown-item" href="#" onClick={getAllClasses}><i
                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                </div>
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

export default AddSection
