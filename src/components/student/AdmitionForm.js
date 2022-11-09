import React, { Fragment , useState, useContext} from 'react'
import StudentContext from '../../context/student/StudentContext'
import AlertContext from '../../context/alert/AlertContext'
import {useNavigate} from 'react-router-dom'
function AdmitionForm() {
    const navigate=useNavigate()
    const studentCntxt=useContext(StudentContext)
    const alerContext=useContext(AlertContext)
    const {setAlert}=alerContext
    const {registerStudent}=studentCntxt
    const [studentData, setStudentData]=useState({
        student_name:'',
        father_name:'',
        class:'',
        section:'',
        B_form:'',
        Father_CNIC:'',
        email:'',
        address:'',
        country:'',
        city:'',
        province:'',
        father_profession:'',
        mother_qualification:'',
        father_qualification:'',
        father_number:'',
        gender:'',
        religion:'',
        student_image:""
    })
    const resetHandler=()=>{
        setStudentData({
            student_name:'',
            father_name:'',
            class:'',
            section:'',
            B_form:'',
            Father_CNIC:'',
            email:'',
            address:'',
            country:'',
            city:'',
            province:'',
            father_profession:'',
            mother_qualification:'',
            father_qualification:'',
            father_number:'',
            gender:'',
            religion:'',
            student_image:''
        })
    }
    const onChangeHandler=(e)=>{
        if(e.target.name==='student_image')
        {
            console.log("image path change")
            setStudentData({...studentData, [e.target.name]:'image path'})

        }
        else{

            setStudentData({...studentData, [e.target.name]:e.target.value})
        }
    }
    const submitHandler=async(e)=>{
        e.preventDefault()
        if(studentData.Father_CNIC.length<13){
            setAlert({ visible: true, mesg:"CNIC lenght not less then 13" });

            return
        }
        if(studentData.B_form.length!=0 && studentData.B_form.length<13)
        {
            setAlert({ visible: true, mesg: "student form lenght not less then 13" });
            return
        }
        if(studentData.father_number.length<10)
        {  
            setAlert({ visible: true, mesg: "father number length not less then 10" });
            return
        }
        const response = await registerStudent(studentData);
        console.log(response)
        setAlert({ visible: true, mesg: response });
        navigate('/allStudents')
         resetHandler()
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
                        <li>Student Admit Form</li>
                    </ul>
                </div>
           
                <div class="card height-auto">
                    <div class="card-body">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>Add New Students</h3>
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
                        <form class="new-added-form " onSubmit={submitHandler}>
                            <div class="row">
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Student Name *</label>
                                    <input type="text" placeholder="" class="form-control"name='student_name' required  value={studentData.student_name} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Father/Guardian Name *</label>
                                    <input type="text" placeholder="" required class="form-control"name='father_name'  value={studentData.father_name} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Gender *</label>
                                    <select class="select2" name='gender' required  value={studentData.gender} onChange={onChangeHandler}>
                                        <option value="">Choose option *</option>
                                        <option value="Male">Male</option>
                                        <option value="fMale">Female</option>
                                    </select>
                                </div>
                         
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Country *</label>
                                    <input type="text" placeholder="" required class="form-control" name='country'  value={studentData.country} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>City *</label>
                                    <input type="text" placeholder="" required class="form-control" name='city'  value={studentData.city} onChange={onChangeHandler} />
                                </div>
                                
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Province/ State *</label>
                                    <input type="text" placeholder="" required class="form-control" name='province'  value={studentData.province} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Address *</label>
                                    <input type="text" placeholder="" required class="form-control" name='address'  value={studentData.address} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>E-Mail</label>
                                    <input type="email" placeholder="" class="form-control" name='email'  value={studentData.email} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>B-Form No</label>
                                    <input type="number" placeholder="" maxLength={13}  onInput={(e) => {if (e.target.value.length > e.target.maxLength)e.target.value = e.target.value.slice(0,e.target.maxLength);}} class="form-control" name='B_form'  value={studentData.B_form} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>CNIC of father</label>
                                    <input type="number"  maxLength={13}  onInput={(e) => {if (e.target.value.length > e.target.maxLength)e.target.value = e.target.value.slice(0,e.target.maxLength);}}  placeholder="" required class="form-control" name='Father_CNIC'  value={studentData.Father_CNIC} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Father profession</label>
                                    <input type="text" placeholder="" class="form-control" name='father_profession'  value={studentData.father_profession} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Mothers Qualification</label>
                                    <input type="text" placeholder="" class="form-control" name='mother_qualification'  value={studentData.mother_qualification} onChange={onChangeHandler}/>
                                </div>
                                
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Fathers Qualification</label>
                                    <input type="text" placeholder="" class="form-control" name='father_qualification'  value={studentData.father_qualification} onChange={onChangeHandler}/>
                                </div>
                                
                         
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Father/Guardian number</label>
                                    <input type="number" placeholder="" required maxLength={10}  onInput={(e) => {if (e.target.value.length > e.target.maxLength)e.target.value = e.target.value.slice(0,e.target.maxLength);}} class="form-control" name='father_number'  value={studentData.father_number} onChange={onChangeHandler}/>
                                </div>
                              
                            
                            
                       
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Class *</label>
                                    <select class="select2" required name='class'  value={studentData.class} onChange={onChangeHandler}>
                                        <option value="">Choose option *</option>
                                        <option value="1">Play</option>
                                        <option value="2">Nursery</option>
                                        <option value="3">One</option>
                                        <option value="3">Two</option>
                                        <option value="3">Three</option>
                                        <option value="3">Four</option>
                                        <option value="3">Five</option>
                                    </select>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Section</label>
                                    <select class="select2"  name='section'  value={studentData.section} onChange={onChangeHandler}>
                                        <option value="">Choose Option *</option>
                                        <option value="1">Pink</option>
                                        <option value="2">Blue</option>
                                        <option value="3">Bird</option>
                                        <option value="3">Rose</option>
                                        <option value="3">Red</option>
                                    </select>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>religion *</label>
                                    <select class="select2" name='religion' required  value={studentData.religion} onChange={onChangeHandler}>
                                        <option value="">Choose Option *</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Christian">Christian</option>
                                      
                                    </select>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Admission ID</label>
                                    <input type="text" placeholder="" class="form-control" name='admission_ID' />
                                </div>
                                <div class="col-lg-6 col-12 form-group mg-t-30">
                                    <label class="text-dark-medium">Upload Student Photo (150px X 150px)</label>
                                    <input type="file" pattern='image/*' required name='student_image' onChange={onChangeHandler} class="form-control-file"/>
                                </div>
                                <div class="col-12 form-group mg-t-8">
                                    <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                    <button type="reset" class="btn-fill-lg bg-blue-dark btn-hover-yellow" onClick={resetHandler}>Reset</button>
                                </div>
                            </div>
                        </form>
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

export default AdmitionForm
