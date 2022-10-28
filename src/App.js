import './App.css';
import Navbar from './components/layout/Navbar';
import TopNavBar from './components/layout/TopNavBar';
import MainAdminPanel from './components/pannel/MainAdminPanel';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import StudentPanel from './components/student/StudentPanel';
import TeacherPanel from './components/teacher/TeacherPanel';
import AllStudents from './components/student/AllStudents';
import StudentDetail from './components/student/StudentDetail';
import AdmitionForm from './components/student/AdmitionForm';
import StudentPromotion from './components/student/StudentPromotion';
import AllTeachers from './components/teacher/AllTeachers';
import TeacheDetail from './components/teacher/TeacheDetail';
import TeacherPayment from './components/teacher/TeacherPayment';
import FeeCollection from './components/account/FeeCollection';
import AllExpenses from './components/account/AllExpenses';
import AddExpenses from './components/account/AddExpenses';
import AllClasses from './components/class/AllClasses';
import AddClass from './components/class/AddClass';
import AllSubjects from './components/subjects/AllSubjects';
import StudentAttendence from './components/student/StudentAttendence';
import ExamSchedual from './components/exam/ExamSchedual';
import ExamGrade from './components/exam/ExamGrade';
import AddTeacher from './components/teacher/AddTeacher';
import AccountSetting from './components/AccountSetting';
import Login from './components/auth/Login';
import {useContext} from 'react'
import AuthContext from './context/auth/AuthContext';
import PageNotFound from './components/PageNotFound';
function App() {
  const context=useContext(AuthContext)
  const {authUser}=context
  const {isAdmin, isTeacher, isStudent}=authUser
  return (
    
    <Router>
       <div id="wrapper" class="wrapper bg-ash">

        <TopNavBar/>
        <div class="dashboard-page-one">
        <Navbar/>

        <Routes >
        <Route exact path='/login' element={ <Login/>} ></Route>

          <Route exact path='/dashboard' element={isAdmin ? <MainAdminPanel/>:<Login/>} ></Route>
          <Route exact path='/studentPanel' element={(isStudent || isAdmin)? <StudentPanel/>:<Login/>} ></Route>
          <Route exact path='/teacherPanel' element={(isTeacher || isAdmin)? <TeacherPanel/>:<Login/>} ></Route>
          <Route exact path='/allStudents' element={isAdmin? <AllStudents/>:<Login/>} ></Route>
          <Route exact path='/studentDetail' element={isAdmin? <StudentDetail/>:<Login/>} ></Route>
          <Route exact path='/admitionForm' element={isAdmin? <AdmitionForm/>:<Login/>} ></Route>
          <Route exact path='/studentPromotion' element={isAdmin? <StudentPromotion/>:<Login/>} ></Route>
          <Route exact path='/allTeacher' element={isAdmin? <AllTeachers/>:<Login/>} ></Route>
          <Route exact path='/addTeacher' element={isAdmin? <AddTeacher/>:<Login/>} ></Route>
          <Route exact path='/teacherDetail' element={ isAdmin?<TeacheDetail/>:<Login/>} ></Route>
          <Route exact path='/teacherPayment' element={ <TeacherPayment/>} ></Route>
          <Route exact path='/allFees' element={ <FeeCollection/>} ></Route>
          <Route exact path='/allExpense' element={ <AllExpenses/>} ></Route>
          <Route exact path='/addExpense' element={ <AddExpenses/>} ></Route>
          <Route exact path='/addClass' element={ <AddClass/>} ></Route>
          <Route exact path='/allSubject' element={ <AllSubjects/>} ></Route>
          <Route exact path='/studentAttendence' element={ <StudentAttendence/>} ></Route>
          <Route exact path='/allClass' element={ <AllClasses/>} ></Route>
          <Route exact path='/examSchedule' element={ <ExamSchedual/>} ></Route>
          <Route exact path='/examGrade' element={ <ExamGrade/>} ></Route>
          {/* { (true || false) && <Route exact path='/accountSettings' element={ <AccountSetting/>} ></Route>} */}
          <Route exact path='/accountSettings' element={ (false || true) ? <AccountSetting/>:<Login/> } ></Route>
          <Route exact path='*' element={<PageNotFound/>}></Route>

        </Routes>
        </div>
       </div>
    </Router>
    
   

 
  );
}


export default App;
