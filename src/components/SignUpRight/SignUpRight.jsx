"use client";
import Link from "next/link";
import React, { useState } from "react";
import google from "./image/Frame 1413372766.png";
import facebook from "./image/Frame 1413372767.png";
import view from "./image/view 2.png";

const SignUpRight = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='sign-up-right'>
      <h2 className='signup-title'>Welcome to taquillacentral</h2>
      <p className='sign-up-des'>Register your account</p>
      <form action='' className='sign-up-form'>
        <div className='form-group'>
          <label htmlFor=''>
            Correo <span>*</span>
          </label>
          <input className='w-100' type='text' placeholder='info@example.com' />
        </div>
        <div className='form-group position-relative'>
          <label htmlFor=''>
            Contraseña <span>*</span>
          </label>
          <input
            className='w-100'
            type={showPassword ? "text" : "password"}
            placeholder='8+ characters'
          />
          <div
            onClick={togglePasswordVisibility}
            type='button'
            className='position-absolute view-btn'
          >
            <img src={view.src} alt='' />
          </div>
        </div>
        <div className='form-group position-relative'>
          <label htmlFor=''>
            Confirmar contraseña* <span>*</span>
          </label>
          <input
            className='w-100'
            type={showPassword ? "text" : "password"}
            placeholder='**** **** **** ****'
          />
          <div
            onClick={togglePasswordVisibility}
            type='button'
            className='position-absolute view-btn'
          >
            <img src={view.src} alt='' />
          </div>
        </div>
        <div className='form-group'>
          <input
            className='submit-signup'
            type='submit'
            value='Create Account'
          />
        </div>
        <div className='text-center social'>
          <p>Create account with</p>
          <div className='social-icon'>
            <img src={google.src} alt='' />
            <img src={facebook.src} alt='' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpRight;
