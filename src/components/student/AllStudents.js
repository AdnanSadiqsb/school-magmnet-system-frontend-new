import React, { Fragment } from 'react'
import StudentContext from '../../context/student/StudentContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import {DataGrid} from '@material-ui/data-grid'
import {Link} from 'react-router-dom'
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

    const columns=[
        {field:'id',headName:'Admission ID',  minWidth:200},
        {field:'name',headName:'Name', minWidth:200,},
        {field:'class',headName:'Class', minWidth:150},
        {field:'parent',headName:'Parents', minWidth:150},

        {field:'phone',headName:'Phone', minWidth:150},

        {field:'action', headerName:'Action',  minWidth:250, sortable:false, renderCell:(params)=>{
            return( 
                <>
                    <Link class="dropdown-item" to="#" onClick={()=>deleteStudentfun(params.getValue(params.id,"id"))}><i
                            class="fas fa-times text-orange-red"></i>Delete</Link>
                    <Link class="dropdown-item" to={`/updateStudent/${params.getValue(params.id,"id")}`}><i
                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                    <Link class="dropdown-item" to={`/studentDetail/${params.getValue(params.id,"id")}`}><i
                            class="fas fa-redo-alt text-orange-peel"></i>View</Link>
            
                 </>
                )
            } 
        }
    ]
        

    
    const rows=[]
        studentData && studentData.forEach((item,index)=>{
            rows.push({
                id:item._id,
                name:item.student_name,
                phone:item.father_number,
                class:item.class,
                parent:item.father_name
   
            })
        })
        const printAllStudents=()=>{
            var divToPrint=document.getElementById('DivIdToPrint');

            var newWin=window.open('','Print-Window');
          
            newWin.document.open();
          
            newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');
          
            newWin.document.close();
          
            setTimeout(function(){newWin.close();},10);
        }
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
                                    <a class="dropdown-item" href="#" onClick={printAllStudents}><i
                                            class="fas fa-print text-dark-pastel-green" ></i>Print</a>

                                    <a class="dropdown-item" href="#" onClick={getAllStudents}><i
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
                    <div class="copyright">© Copyrights <a href="#">akkhor</a> 2019. All rights reserved. Designed by <a
                            href="#">PsdBosS</a></div>
                </footer>
            </div>
    </Fragment>
  )
}

export default AllStudents
