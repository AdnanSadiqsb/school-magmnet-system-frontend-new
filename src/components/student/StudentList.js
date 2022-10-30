import React from 'react'
import { Fragment } from 'react'
import {Link} from 'react-router-dom'
function StudentList() {
  return (
    <Fragment>
       <tr>
            <td>#2398</td>
            <td>Mark Willy</td>
            <td>Matric</td>
            <td>A</td>
            <td>Jack Sparrow </td>
            <td>+ 123 9988568</td>
            <td>kazifahim93@gmail.com</td>
            <td>
                <div class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                        aria-expanded="false">
                        <span class="flaticon-more-button-of-three-dots"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#"><i
                                class="fas fa-times text-orange-red"></i>Delete</a>
                        <Link class="dropdown-item" to="/updateStudent"><i
                                class="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                        <Link class="dropdown-item" to="/studentDetail"><i
                                class="fas fa-redo-alt text-orange-peel"></i>View</Link>
                    </div>
                </div>
            </td>
        </tr>
    </Fragment>
  )
}

export default StudentList
