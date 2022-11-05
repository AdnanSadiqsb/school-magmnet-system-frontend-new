import "./App.css";
import Navbar from "./components/layout/Navbar";
import TopNavBar from "./components/layout/TopNavBar";
import MainAdminPanel from "./components/pannel/MainAdminPanel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentPanel from "./components/student/StudentPanel";
import TeacherPanel from "./components/teacher/TeacherPanel";
import AllStudents from "./components/student/AllStudents";
import StudentDetail from "./components/student/StudentDetail";
import AdmitionForm from "./components/student/AdmitionForm";
import StudentPromotion from "./components/student/StudentPromotion";
import AllTeachers from "./components/teacher/AllTeachers";
import TeacheDetail from "./components/teacher/TeacheDetail";
import TeacherPayment from "./components/teacher/TeacherPayment";
import FeeCollection from "./components/account/FeeCollection";
import AllExpenses from "./components/account/AllExpenses";
import AddExpenses from "./components/account/AddExpenses";
import AllClasses from "./components/class/AllClasses";
import AddClass from "./components/class/AddClass";
import AllSubjects from "./components/subjects/AllSubjects";
import StudentAttendence from "./components/student/StudentAttendence";
import ExamSchedual from "./components/exam/ExamSchedual";
import ExamGrade from "./components/exam/ExamGrade";
import AddTeacher from "./components/teacher/AddTeacher";
import AccountSetting from "./components/AccountSetting";
import Login from "./components/auth/Login";
import { useContext } from "react";
import AuthContext from "./context/auth/AuthContext";
import PageNotFound from "./components/PageNotFound";
import Alert from "./components/alert/alert";
import UpdateStudent from "./components/student/UpdateStudent";
import { useEffect } from "react";
import AlertContext from "./context/alert/AlertContext";
function App() {
  const context = useContext(AuthContext);
  const alertContext=useContext(AlertContext)
  const {alert} =alertContext
  const { authUser,setAuthUser } = context;
  const { isAdmin, isTeacher, isStudent  } = authUser;
  useEffect(()=>{
    if(localStorage.getItem("authkey"))
    {
      setAuthUser({ ...authUser, isAdmin: true })
    }
  },[])
  return (
    <>
      <Router>
        <div id="wrapper" class="wrapper bg-ash">
          <TopNavBar />
          <div class="dashboard-page-one">
            <Navbar />

            <Routes>
              <Route
                path="/"
                element={isAdmin ? <MainAdminPanel /> : <Login />}
              ></Route>

              <Route path="/login" element={<Login />}></Route>

              <Route
                path="/studentPanel"
                element={isStudent || isAdmin ? <StudentPanel /> : <Login />}
              ></Route>
              <Route
                path="/teacherPanel"
                element={isTeacher || isAdmin ? <TeacherPanel /> : <Login />}
              ></Route>
              <Route
                path="/allStudents"
                element={isAdmin ? <AllStudents /> : <Login />}
              ></Route>
              <Route
                path="/studentDetail/:id"
                element={isAdmin ? <StudentDetail /> : <Login />}
              ></Route>
              <Route
                path="/admitionForm"
                element={isAdmin ? <AdmitionForm /> : <Login />}
              ></Route>
              <Route
                path="/studentPromotion"
                element={isAdmin ? <StudentPromotion /> : <Login />}
              ></Route>
              <Route
                path="/allTeacher"
                element={isAdmin ? <AllTeachers /> : <Login />}
              ></Route>
              <Route
                path="/addTeacher"
                element={isAdmin ? <AddTeacher /> : <Login />}
              ></Route>
              <Route
                path="/teacherDetail"
                element={isAdmin ? <TeacheDetail /> : <Login />}
              ></Route>
              <Route
                path="/updateStudent"
                element={<UpdateStudent /> }
              ></Route>
              <Route
                path="/teacherPayment"
                element={<TeacherPayment />}
              ></Route>
              <Route path="/allFees" element={<FeeCollection />}></Route>
              <Route path="/allExpense" element={<AllExpenses />}></Route>
              <Route path="/addExpense" element={<AddExpenses />}></Route>
              <Route path="/addClass" element={<AddClass />}></Route>
              <Route path="/allSubject" element={<AllSubjects />}></Route>
              <Route
                path="/studentAttendence"
                element={<StudentAttendence />}
              ></Route>
              <Route path="/allClass" element={<AllClasses />}></Route>
              <Route path="/examSchedule" element={<ExamSchedual />}></Route>
              <Route path="/examGrade" element={<ExamGrade />}></Route>
              {/* { (true || false) && <Route path='/accountSettings' element={ <AccountSetting/>} ></Route>} */}
              <Route
                path="/accountSettings"
                element={false || true ? <AccountSetting /> : <Login />}
              ></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </div>
        </div>
      </Router>

      {alert.visible && <Alert />}
    </>
  );
}

export default App;
