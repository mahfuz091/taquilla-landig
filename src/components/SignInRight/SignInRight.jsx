"use client";
import React, { useState } from "react";
import google from "./image/Frame 1413372766.png";
import facebook from "./image/Frame 1413372767.png";

import view from "./image/view 2.png";
import { useRouter } from "next/navigation";

const SignInRight = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const router = useRouter();
  const handleSignIn = (event) => {
    event.preventDefault();

    localStorage.setItem("auth", JSON.stringify(true));

    router.push("/");
  };

  return (
    <>
      <div className='sign-up-right sign-in-right'>
        <h2 className='signup-title'>Welcome to taquillacentral</h2>
        <p className='sign-up-des'>Sign in your account</p>
        <form action='' className='sign-up-form' onSubmit={handleSignIn}>
          <div className='form-group'>
            <label htmlFor=''>
              Usuario / Correo <span>*</span>
            </label>
            <input
              className='w-100'
              type='text'
              placeholder='info@example.com'
            />
          </div>
          <div className='form-group  position-relative'>
            <label htmlFor=''>
              Contraseña <span>*</span>
            </label>
            <input
              className='w-100'
              type={showPassword ? "text" : "password"}
              placeholder='**** **** **** ****'
            />
            <div
              onClick={togglePasswordVisibility}
              className='position-absolute view-btn'
            >
              <img src={view.src} alt='' />
            </div>
          </div>
          <div className='form-group'>
            <input className='submit-signup' type='submit' value='Log In' />
          </div>
          <div className='text-center social'>
            <p>Log in your account with</p>
            <div className='social-icon'>
              <img src={google.src} alt='' />
              <img src={facebook.src} alt='' />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInRight;
