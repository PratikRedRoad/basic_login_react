import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Title from './components/ui/Title'
import PopUp from './components/ui/PopUp';
// import ForgotPassword from './components/forgotpassword';
import LoginReject from "./LoginReject";
import { useNavigate } from "react-router-dom";

export default function (props) {
  // const [showPopUp, setShowPopUp] = useState(false);
  const [loading, setLoading] = useState(false); // Add a loading state
  const [authMode, setAuthMode] = useState("signin");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    console.log("useEffect called from Auth .jsx");
  },[])

  const onSubmit = async (data) => {
    const formData = new URLSearchParams();
    formData.append('username',data.email)
    formData.append('password',data.password)
    console.log(formData);
    setLoading(true); // Set loading to true when submitting the form
    try {
      const response = await fetch("http://127.0.0.1:8001/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });
      const responseData = await response.json();
      console.log(responseData);
      // if (response.status===200) {
      //   // const token = responseData.message.token.split(" ");
      //   localStorage.setItem('token', responseData.message.token);
      //   // if (responseData.message.roles.includes("HR User") || responseData.message.roles.includes("HR Manager")) {
          
          navigate('/invoices');

      //   // }
      // } else {
      //   console.log(response.status);
        
      //   console.error("Login failed:", responseData.message);
      // }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);     }
  };

  const handleForgotPassword = async () => {
    setShowForgotPassword(true);
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
    localStorage.setItem('isLoggedIn',true)
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <Title />
        {loading ? (
          // Render a loader component while the API request is being processed
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
        )}
      </div>
    );
  }

  return (
    
    <div className="Auth-form-container">
      <Title />
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              {...register("fullName", { required: true })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
        Forgot <a href="#" onClick={handleForgotPassword}>password?</a>
      </p>
     
        </div>
        
      
        </form>
      )}
    </div>
  );
}