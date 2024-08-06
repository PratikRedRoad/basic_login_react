import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Title from './components/ui/Title'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./store/userSlice"

export default function (props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); // Add a loading state
  const [authMode, setAuthMode] = useState("signin");
  // const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new URLSearchParams();
    formData.append('username',data.email)
    formData.append('password',data.password)
    setLoading(true); // Set loading to true when submitting the form
    try {
      const apiUrl = new URL("/api/auth/", process.env.REACT_APP_FAST_API_URL);
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        credentials:"include",
        body: formData.toString(),
      });
      const responseData = await response.json();
      if (response.status===200) {    
        dispatch(login(responseData))
        navigate('/home');        }
      else {
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);     }
  };

  // const handleForgotPassword = async () => {
  //   setShowForgotPassword(true);
  // };

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
        {/* Forgot <a href="#" onClick={handleForgotPassword}>password?</a> */}
        Forgot <a href="#">password?</a>
      </p>
        </div>
        </form>
      )}
    </div>
  );
}