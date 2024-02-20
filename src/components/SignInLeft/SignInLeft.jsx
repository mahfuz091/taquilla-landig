import React from "react";
import img from "./image/sign-in-bg.png";

const SignInLeft = () => {
  const styling = {
    backgroundImage: `url('${img.src}')`,
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return <div className='sign-up-left sign-in-left ' style={styling}></div>;
};

export default SignInLeft;
