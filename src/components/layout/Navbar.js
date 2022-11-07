import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
function Navbar({sideBarDisplay}) {
    const [dashDisplay, setDashDispaly]=useState('none')
    const [stuDisplay, setStuDispaly]=useState('none')
    const [teaDisplay, setTeaDispaly]=useState('none')
    const [accDisplay, setAccDispaly]=useState('none')
    const [exaDisplay, setExaDispaly]=useState('none')
    const [claDisplay, setClaDispaly]=useState('none')
  
    const navClickHandler=(linkName)=>{
        if(linkName==='dashboard')
        {
            console.log('hlo jan')
            dashDisplay==='none'?setDashDispaly('block'):setDashDispaly('none')
        }
        else if(linkName==='student')
        {
            stuDisplay==='none'?setStuDispaly('block'):setStuDispaly('none')
        }
        else if(linkName==='teacher')
        {
            teaDisplay==='none'?setTeaDispaly('block'):setTeaDispaly('none')
        }
        else if(linkName==='account')
        {
            accDisplay==='none'?setAccDispaly('block'):setAccDispaly('none')
        }
        else if(linkName==='exam')
        {
            exaDisplay==='none'?setExaDispaly('block'):setExaDispaly('none')
        }
        else if(linkName==='class')
        {
            claDisplay==='none'?setClaDispaly('block'):setClaDispaly('none')
        }
    }
  return (
    <Fragment>
            <div class="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color" style={{'left':`${sideBarDisplay}%`}}>
               <div class="mobile-sidebar-header d-md-none">
                    <div class="header-logo">
                        <a href="index.html"><img src="img/logo1.png" alt="logo"/></a>
                    </div>
               </div>
                <div class="sidebar-menu-content">
                    <ul class="nav nav-sidebar-menu sidebar-toggle-view">
                        <li class="nav-item sidebar-nav-item">
                            <a onClick={()=>navClickHandler('dashboard')} href="#" class="nav-link"><i class="flaticon-dashboard" ></i><span >Dashboard</span></a>
                            <ul class="nav sub-group-menu menu-open" style={{'display':`${dashDisplay}`}}>
                                <li class="nav-item">
                                    <Link to={'/'} class="nav-link"><i class="fas fa-angle-right"></i>Admin</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to={'/studentPanel'} class="nav-link"><i
                                            class="fas fa-angle-right"></i>Students</Link>
                                </li>
                                <li class="nav-item">
                                    <a href="index4.html" class="nav-link"><i class="fas fa-angle-right"></i>Parents</a>
                                </li>
                                <li class="nav-item">
                                    <Link to="/teacherPanel" class="nav-link"><i
                                            class="fas fa-angle-right"></i>Teachers</Link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item sidebar-nav-item">
                            <a onClick={()=>navClickHandler('student')} href="#" class="nav-link"><i class="flaticon-classmates"></i><span>Students</span></a>
                            <ul class="nav sub-group-menu menu-open"  style={{'display':`${stuDisplay}`}}>
                                <li class="nav-item">
                                    <Link to={'allStudents'} class="nav-link"><i class="fas fa-angle-right"></i>All
                                        Students</Link>
                                </li>
                             
                                <li class="nav-item">
                                    <Link to={'admitionForm'} class="nav-link"><i
                                            class="fas fa-angle-right"></i>Admission Form</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="studentPromotion" class="nav-link"><i
                                            class="fas fa-angle-right"></i>Student Promotion</Link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item sidebar-nav-item">
                            <a onClick={()=>navClickHandler('teacher')} href="#" class="nav-link"><i
                                    class="flaticon-multiple-users-silhouette"></i><span>Teachers</span></a>
                            <ul class="nav sub-group-menu menu-open"  style={{'display':`${teaDisplay}`}}>
                                <li class="nav-item">
                                    <Link to="allTeacher" class="nav-link"><i class="fas fa-angle-right"></i>All
                                        Teachers</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="teacherDetail" class="nav-link"><i
                                            class="fas fa-angle-right"></i>Teacher Details</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="addTeacher" class="nav-link"><i class="fas fa-angle-right"></i>Add
                                        Teacher</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="teacherPayment" class="nav-link"><i
                                            class="fas fa-angle-right"></i>Payment</Link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item sidebar-nav-item">
                            <a href="#" class="nav-link"><i class="flaticon-couple"></i><span>Parents</span></a>
                            <ul class="nav sub-group-menu">
                                <li class="nav-item">
                                    <a href="all-parents.html" class="nav-link"><i class="fas fa-angle-right"></i>All
                                        Parents</a>
                                </li>
                                <li class="nav-item">
                                    <a href="parents-details.html" class="nav-link"><i
                                            class="fas fa-angle-right"></i>Parents Details</a>
                                </li>
                                <li class="nav-item">
                                    <a href="add-parents.html" class="nav-link"><i class="fas fa-angle-right"></i>Add
                                        Parent</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item sidebar-nav-item">
                            <a href="#" class="nav-link"><i class="flaticon-books"></i><span>Library</span></a>
                            <ul class="nav sub-group-menu">
                                <li class="nav-item">
                                    <a href="all-book.html" class="nav-link"><i class="fas fa-angle-right"></i>All
                                        Book</a>
                                </li>
                                <li class="nav-item">
                                    <a href="add-book.html" class="nav-link"><i class="fas fa-angle-right"></i>Add New
                                        Book</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item sidebar-nav-item">
                            <a onClick={()=>navClickHandler('account')} href="#" class="nav-link"><i class="flaticon-technological"></i><span>Acconunt</span></a>
                            <ul class="nav sub-group-menu menu-open" style={{'display':`${accDisplay}`}}>
                                <li class="nav-item">
                                    <Link to="allFees" class="nav-link"><i class="fas fa-angle-right"></i>All Fees
                                        Collection</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="allExpense" class="nav-link"><i
                                            class="fas fa-angle-right"></i>Expenses</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="addExpense" class="nav-link"><i class="fas fa-angle-right"></i>Add
                                        Expenses</Link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item sidebar-nav-item">
                            <a onClick={()=>navClickHandler('class')} href="#" class="nav-link"><i
                                    class="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i><span>Class</span></a>
                            <ul class="nav sub-group-menu menu-open" style={{'display':`${claDisplay}`}}>
                                <li class="nav-item">
                                    <Link to="allClass" class="nav-link"><i class="fas fa-angle-right"></i>All
                                        Classes</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="addClass" class="nav-link"><i class="fas fa-angle-right"></i>Add New
                                        Class</Link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link to="allSubject" class="nav-link"><i
                                    class="flaticon-open-book"></i><span>Subject</span></Link>
                        </li>
                        <li class="nav-item">
                            <a href="class-routine.html" class="nav-link"><i class="flaticon-calendar"></i><span>Class
                                    Routine</span></a>
                        </li>
                        <li class="nav-item">
                            <Link to="studentAttendence" class="nav-link"><i
                                    class="flaticon-checklist"></i><span>Attendence</span></Link>
                        </li>
                        <li class="nav-item sidebar-nav-item">
                            <a onClick={()=>navClickHandler('exam')} href="#" class="nav-link"><i class="flaticon-shopping-list"></i><span>Exam</span></a>
                            <ul class="nav sub-group-menu menu-open" style={{'display':`${exaDisplay}`}}>
                                <li class="nav-item">
                                    <Link to="examSchedule" class="nav-link"><i class="fas fa-angle-right"></i>Exam
                                        Schedule</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="examGrade" class="nav-link"><i class="fas fa-angle-right"></i>Exam
                                        Grades</Link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="transport.html" class="nav-link"><i
                                    class="flaticon-bus-side-view"></i><span>Transport</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="hostel.html" class="nav-link"><i class="flaticon-bed"></i><span>Hostel</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="notice-board.html" class="nav-link"><i
                                    class="flaticon-script"></i><span>Notice</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="messaging.html" class="nav-link"><i
                                    class="flaticon-chat"></i><span>Messeage</span></a>
                        </li>
                  
                  
                        <li class="nav-item">
                            <Link to="accountSettings" class="nav-link"><i
                                    class="flaticon-settings"></i><span>Account</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
      
    </Fragment>
  )
}

export default Navbar
