import React, { useState, useContext, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
function Login() {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const { loginUser, loading, alert, setAlert, setAuthUser, authUser } = context;

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await loginUser(login);
    console.log(response)
    if (response.message) {
     setAlert({ visible: true, mesg: response.response.data });
      
    }
    else{

      
      setAlert({ visible: true, mesg: "user logged in successfully" });
      const role = response.role;
      console.log(role);
      
      if (role === 1) {
        setAuthUser({ ...authUser, isAdmin: true });
        navigate("/");
    }
    else if (role === 2) navigate("/teacherPanel");
    else if (role === 3) navigate("/studentPanel");
  }
  };

  return (
    <div className="login-section">
      <div class="login-page-wrap">
        <div class="login-page-content">
          <div class="login-box">
            <div class="item-logo">
              <img src="img/logo2.png" alt="logo" />
            </div>
            <form action="" class="login-form" onSubmit={submitHandler}>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="text"
                  placeholder="Enter email"
                  class="form-control"
                  name="email"
                  id="email"
                  value={login.email}
                  onChange={(e) =>
                    setLogin({ ...login, email: e.target.value })
                  }
                />
                <i class="far fa-envelope"></i>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  class="form-control"
                  name="password"
                  id="password"
                  value={login.password}
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                />
                <i class="fas fa-lock"></i>
              </div>
              <div class="form-group d-flex align-items-center justify-content-between">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="remember-me"
                  />
                  <label for="remember-me" class="form-check-label">
                    Remember Me
                  </label>
                </div>
                <a href="#" class="forgot-btn">
                  Forgot Password?
                </a>
              </div>
              <div class="form-group">
                <button type="submit" class="login-btn">
                  Login
                </button>
              </div>
            </form>
            <div class="login-social">
              <p>or sign in with</p>
              <ul>
                <li>
                  <a href="#" class="bg-fb">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="bg-twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="bg-gplus">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="bg-git">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="sign-up">
            Don't have an account ? <a href="#">Signup now!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
