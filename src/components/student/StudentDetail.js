import React, { Fragment, useContext } from 'react'
import { useEffect } from 'react'
import StudentContext from '../../context/student/StudentContext'
import {useParams, useNavigate} from 'react-router-dom'
import AlertContext from '../../context/alert/AlertContext'
import {Link} from 'react-router-dom'
function StudentDetail({student}) {
    const navigate=useNavigate()
    const studentContext=useContext(StudentContext)
    const {studentDetail, getSingleStudent }=studentContext
    const alerContext=useContext(AlertContext)
    const {alert}=alerContext
    const {id}=useParams()
    useEffect(()=>{
        getSingleStudent(id)
    },[alert])
    const printStudent=()=>{
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
                        <li>Student Details</li>
                    </ul>
                </div>
           
                <div class="card height-auto" >
                    <div class="card-body">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>About Me</h3>
                            </div>
                          
                        </div>
                        <div class="single-info-details" >
                            <div class="item-img">
                                <img src="/img/figure/student1.jpg" alt="student"/>
                            </div>
                            <div class="item-content ">
                                <div class="header-inline item-header">
                                    <h3 class="text-dark-medium font-medium">{studentDetail.student_name && studentDetail.student_name}</h3>
                                    <div class="header-elements">
                                        <ul>
                                            <li><Link to={`/updateStudent/${id}`}><i class="far fa-edit"></i></Link></li>
                                            <li><a href="#" onClick={printStudent}><i class="fas fa-print"></i></a></li>
                                            <li><a href="#"><i class="fas fa-download"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <p>Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale 
                                word moun taiery.Aliquam erat volutpaturabiene natis massa sedde  sodale 
                                word moun taiery.</p> */}
                                <div class="info-table table-responsive" id='DivIdToPrint' >
                                    <table class="table text-nowrap">
                                        <tbody>
                                            <tr>
                                                <td>Name:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.student_name && studentDetail.student_name}</td>
                                            </tr>
                                            <tr>
                                                <td>Gender:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.gender && studentDetail.gender}</td>
                                            </tr>
                                            <tr>
                                                <td>Father Name:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.father_name && studentDetail.father_name}</td>
                                            </tr>
                                            <tr>
                                                <td>Student B_Form:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.B_form && studentDetail.B_form}</td>
                                            </tr>
                                       
                                          
                                            <tr>
                                                <td>Father Number:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.father_number && studentDetail.father_number}</td>
                                            </tr>
                                            <tr>
                                                <td>E-mail:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.email && studentDetail.email}</td>
                                            </tr>
                                           
                                            <tr>
                                                <td>Class:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.class && studentDetail.class.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Section:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.section && studentDetail.section.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Section:</td>
                                                <td class="font-medium text-dark-medium">Pink</td>
                                            </tr>
                                            <tr>
                                                <td>Roll:</td>
                                                <td class="font-medium text-dark-medium">10005</td>
                                            </tr>
                                            <tr>
                                                <td>Country:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.country && studentDetail.country}</td>
                                            </tr>
                                            <tr>
                                                <td>Province:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.province && studentDetail.province}</td>
                                            </tr>
                                            <tr>
                                                <td>City:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.city && studentDetail.city}</td>
                                            </tr>
                                           
                                            <tr>
                                                <td>Address:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.address && studentDetail.address}</td>
                                            </tr>
                                            <tr>
                                                <td>Religion:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.religion && studentDetail.religion}</td>
                                            </tr>
                                            <tr>
                                                <td>Father Profession:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.father_profession && studentDetail.father_profession}</td>
                                            </tr>
                                            <tr>
                                                <td>Father Qualification:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.father_qualification&& studentDetail.father_qualification}</td>
                                            </tr>
                                            <tr>
                                                <td>Mother Qualification:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.mother_qualification&& studentDetail.mother_qualification}</td>
                                            </tr>
                                            <tr>
                                                <td>Father CNIC:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.Father_CNIC&& studentDetail.Father_CNIC}</td>
                                            </tr>
                                            <tr>
                                                <td>Admission Date:</td>
                                                <td class="font-medium text-dark-medium">{studentDetail.createdAt &&  studentDetail.createdAt.slice(0,10)}</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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

export default StudentDetail
