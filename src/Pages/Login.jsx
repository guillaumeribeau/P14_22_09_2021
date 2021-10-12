import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import logo from "../assets/images/logo2.png";
import firebase from "../utils/firebaseConfig";
import { AuthContext } from "../utils/AuthProvider";
import { Redirect } from "react-router-dom";

const Login = () => {
  // react-hook-forms
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // login with firebase
  const onSubmitLogin = (data) => {
    console.log(data);
    firebase
      .auth()
      .signInWithEmailAndPassword(data.username, data.password)
      .then((userCredential) => {
        // Signed in
        const userLogin = userCredential.user;
        console.log(userLogin);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <>
      
      <div className="wrapper-login">
        <img className="logo-login" src={logo} alt="logo de Hrnet" />
        <form
          onSubmit={handleSubmit(onSubmitLogin)}
          className="login-container"
        >
          <div className="header">Login</div>
          <div className="box">
            <div className="input-login-group">
              <label htmlFor="username">Username</label>
              <input
                {...register("username", { required: true })}
                type="text"
                id="username"
                name="username"
              />
              <ErrorMessage
                errors={errors}
                name="username"
                message="Username is required"
                render={({ message }) => (
                  <span className="error_message">{message}</span>
                )}
              />
            </div>

            <div className="input-login-group">
              <label htmlFor="password">Password</label>
              <input
                {...register("password", { required: true })}
                type="password"
                id="password"
                name="password"
              />
              <ErrorMessage
                errors={errors}
                name="password"
                message="Password is required"
                render={({ message }) => (
                  <span className="error_message">{message}</span>
                )}
              />
            </div>

            <button className="login-btn">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
