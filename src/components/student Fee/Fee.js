import React, {useState} from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { MultiSelect } from "react-multi-select-component";
import ClassContext from '../../context/class/ClassContext';
import AlertContext from '../../context/alert/AlertContext';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import StudentContext from '../../context/student/StudentContext';
function Fee() {
    const studentContext=useContext(StudentContext)
    const {getAllStudents, studentData} =studentContext

    const alertContext=useContext(AlertContext)
    const {alert}=alertContext
    const clasContext=useContext(ClassContext)
    const {getAllClasses,classData}=clasContext
    const [studentSelected, setStudentSelcted]=useState([])
    useEffect(()=>{
        getAllClasses()
        getAllStudents()
    },[alert])
    const studentOption=[]
    studentData && studentData.forEach((item,index)=>{
        studentOption.push({
            label:item.student_name,
            value:item._id

        })
    })
    const options=[]
    classData && classData.forEach((item,index)=>{
            options.push({
                label:item.name,
                value:item._id
   
            })
        })

    const [selected, setSelected] = useState([]);
   const onAssignHandler=(e)=>{
    e.preventDefault();
    console.log(selected)
    console.log(studentSelected)
   }
  return (
       <div class="dashboard-content-one">
                <div class="breadcrumbs-area">
                    <h3>Accounts</h3>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>Add New Fee</li>
                    </ul>
                </div>
          
                <div class="card height-auto">
                    <div class="card-body">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>Add New Fee</h3>
                            </div>
                           <div class="dropdown">
                                <a class="dropdown-toggle" href="#" role="button" 
                                data-toggle="dropdown" aria-expanded="false">...</a>
        
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#"><i class="fas fa-times text-orange-red"></i>Close</a>
                                    <a class="dropdown-item" href="#"><i class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                    <a class="dropdown-item" href="#"><i class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                </div>
                            </div>
                        </div>
                        <form class="new-added-form" onSubmit={onAssignHandler}>
                            <div class="row">
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Title *</label>
                                    <input type="text" placeholder="" class="form-control"/>
                                </div>
                                
                                
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Amount *</label>
                                    <input type="text" placeholder="" class="form-control"/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Class *</label>
                                    <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                    className='form-group'
                                    />
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Students *</label>
                                    
                                <ReactMultiSelectCheckboxes options={studentOption}   className='form-group' onChange={setStudentSelcted}  />
                                </div>

                                
                                
                                
                                <div class="col-12 form-group mg-t-8">
                                    <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                    <button type="reset" class="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <footer class="footer-wrap-layout1">
                    <div class="copyright">© Copyrights <a href="#">akkhor</a> 2019. All rights reserved. Designed by <a href="#">PsdBosS</a></div>
                </footer>
            </div>
  )
}

export default Fee
