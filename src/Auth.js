import React, { useState } from "react"
import { useForm } from "react-hook-form";
import ForgotPassword from './components/forgotpassword';

export default function (props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await fetch("http://localhost:8000/api/method/rhrms.utils.auth.login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usr: data.email,
          pwd: data.password,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Handle successful login
        console.log("Login successful:", responseData);
        // You can store the access token or session ID here
        // and redirect the user or update the UI accordingly
      } else {
        // Handle login error
        console.error("Login failed:", responseData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  //   const email = data.email
  //   const password = data.password

  //   try {
  //     const response = await fetch('https://your-erpnext-instance.com/api/method/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       usr: email,
  //       pwd: password
  //     })
  //   });
  //   }
  //   catch(error){
  //     console.error('Error:', error);
  //   }
  // }

  let [authMode, setAuthMode] = useState("signin")
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const handleForgotPassword = async () => {
    console.log("-------- forgot password function called -----------------------");
    setShowForgotPassword(true);
  };

  // const 

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {

    return (
      <div className="Auth-form-container">
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
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
   
      <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
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
    </div>
  )
} 