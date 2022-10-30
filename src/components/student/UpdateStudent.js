import React, { Fragment , useState} from 'react'

function UpdateStudent() {
    const [studentData, setStudentData]=useState({
        name:'adnna',
        fName:'sadiq',
        class:'2',
        section:'1',
        bForm:'2740-8923034-3',
        fCNIC:'345-34534534-3',
        eMail:'adnansadiq@gmail.com',
        address:'cahk number 230 EB',
        country:'Pakistan',
        city:'Vehari',
        province:'Punjab',
        fProfession:'Busuniss ',
        mQualification:'Matric',
        fQualification:'Matric',
        fNumber:'030300030',
        gender:'Male',
        religion:'Islam'
    })

    const onChangeHandler=(e)=>{
        setStudentData({...studentData, [e.target.name]:e.target.value})
        console.log(studentData)
    }
    const submitHandler=()=>{
        
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
                                    <input type="text" placeholder="" class="form-control"name='name'  value={studentData.name} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Father/Guardian Name *</label>
                                    <input type="text" placeholder="" class="form-control"name='fName'  value={studentData.fName} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Gender *</label>
                                    <select class="select2" name='gender'  value={studentData.gender} onChange={onChangeHandler}>
                                        <option value="">Choose option *</option>
                                        <option value="Male">Male</option>
                                        <option value="fMale">Female</option>
                                        <option value="Other">Others</option>
                                    </select>
                                </div>
                         
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Country *</label>
                                    <input type="text" placeholder="" class="form-control" name='country'  value={studentData.country} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>City *</label>
                                    <input type="text" placeholder="" class="form-control" name='city'  value={studentData.city} onChange={onChangeHandler} />
                                </div>
                                
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Province/ State *</label>
                                    <input type="text" placeholder="" class="form-control" name='province'  value={studentData.province} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Address *</label>
                                    <input type="text" placeholder="" class="form-control" name='address'  value={studentData.address} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>E-Mail</label>
                                    <input type="email" placeholder="" class="form-control" name='eMail'  value={studentData.eMail} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>B-Form No</label>
                                    <input type="text" placeholder="xxxx-xxxxxxxx-x" class="form-control" name='bForm'  value={studentData.bForm} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>CNIC of father</label>
                                    <input type="text" placeholder="xxxx-xxxxxxxx-x" class="form-control" name='fCNIC'  value={studentData.fCNIC} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Father profession</label>
                                    <input type="text" placeholder="" class="form-control" name='fProfession'  value={studentData.fProfession} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Mothers Qualification</label>
                                    <input type="text" placeholder="" class="form-control" name='mQualification'  value={studentData.mQualification} onChange={onChangeHandler}/>
                                </div>
                                
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Fathers Qualification</label>
                                    <input type="text" placeholder="" class="form-control" name='fQualification'  value={studentData.fQualification} onChange={onChangeHandler}/>
                                </div>
                                
                         
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Father/Guardian number</label>
                                    <input type="text" placeholder="" class="form-control" name='fNumber'  value={studentData.fNumber} onChange={onChangeHandler}/>
                                </div>
                              
                            
                            
                       
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Class *</label>
                                    <select class="select2" name='class'  value={studentData.class} onChange={onChangeHandler}>
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
                                    <label>Section *</label>
                                    <select class="select2" name='section'  value={studentData.section} onChange={onChangeHandler}>
                                        <option value="">Choose Option *</option>
                                        <option value="1">Pink</option>
                                        <option value="2">Blue</option>
                                        <option value="3">Bird</option>
                                        <option value="3">Rose</option>
                                        <option value="3">Red</option>
                                    </select>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Religion</label>
                                    <input type="text" placeholder="" class="form-control" name='religion'  value={studentData.religion} onChange={onChangeHandler}/>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label>Admission ID</label>
                                    <input type="text" placeholder="" class="form-control" name='name' />
                                </div>
                                <div class="col-lg-6 col-12 form-group mg-t-30">
                                    <label class="text-dark-medium">Upload Student Photo (150px X 150px)</label>
                                    <input type="file" class="form-control-file"/>
                                </div>
                                <div class="col-12 form-group mg-t-8">
                                    <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Update</button>
                                    <button  class="btn-fill-lg bg-blue-dark btn-hover-yellow">cancel</button>
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

export default UpdateStudent
