import React from 'react'
import { Fragment } from 'react'
import {Link} from 'react-router-dom'
function StudentList({student, deleteStudentfun}) {
  return (
    <Fragment>
       <tr>
            <td>{student._id}</td>
            <td>{student.student_name}</td>
            <td>{student.class}</td>
            <td>{student.section}</td>
            <td>{student.father_name} </td>
            <td>{student.father_number}</td>
            <td>
                <div class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                        aria-expanded="false">
                        <span class="flaticon-more-button-of-three-dots"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <Link class="dropdown-item" to="#" onClick={()=>deleteStudentfun(student._id)}><i
                                class="fas fa-times text-orange-red"></i>Delete</Link>
                        <Link class="dropdown-item" to={`/updateStudent/${student._id}`}><i
                                class="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                        <Link class="dropdown-item" to={`/studentDetail/${student._id}`}><i
                                class="fas fa-redo-alt text-orange-peel"></i>View</Link>
                    </div>
                </div>
            </td>
        </tr>
    </Fragment>
  )
}

export default StudentList
