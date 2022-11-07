import React, { Fragment } from 'react'
import StudentList from './StudentList'
import StudentContext from '../../context/student/StudentContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import AlertContext from '../../context/alert/AlertContext'
function AllStudents() {
    
    const studentContext=useContext(StudentContext)
    const alerContext=useContext(AlertContext)
    const {alert}=alerContext
    const {getAllStudents, studentData, deleteStudent} =studentContext
   const deleteStudentfun=(id)=>{
    const option=window.confirm(`Are you sure to delete the student`)
    if(option===true)
    {

        deleteStudent(id)
        getAllStudents()
    }

   }
    useEffect(()=>{
        getAllStudents()

    },[alert])
  return (
    <Fragment>
             <div class="dashboard-content-one">
                <div class="breadcrumbs-area">
                    <h3>Students</h3>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>All Students</li>
                    </ul>
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
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                    <a class="dropdown-item" href="#"><i
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
                        <div class="table-responsive">
                            <table class="table display data-table text-nowrap">
                                <thead>
                                    <tr>
                                        <th>
                                            Roll
                                        </th>
                                        <th>Name</th>
                                        <th>Class</th>
                                        <th>Section</th>
                                        <th>Parents</th>
                                        <th>Phone</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        studentData && studentData.map((student)=>{
                                            
                                            return   <StudentList student={student} deleteStudentfun={deleteStudentfun}  key={student._id}/>   
                                        })
                                    }

                              
                                 </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <footer class="footer-wrap-layout1">
                    <div class="copyright">© Copyrights <a href="#">akkhor</a> 2019. All rights reserved. Designed by <a
                            href="#">PsdBosS</a></div>
                </footer>
            </div>
    </Fragment>
  )
}

export default AllStudents
