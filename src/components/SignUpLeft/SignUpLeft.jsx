import React from "react";
import img from "./image/sign-up-bg.png";
import { Container, TabContainer } from "react-bootstrap";
import logo from "./image/LOGO TAQUILLA CENTRAL-01 1.png";

const SignUpLeft = () => {
  //   const img = require("./image/sign-up-bg.png");
  const styling = {
    backgroundImage: `url('${img.src}')`,
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <>
      <div className='sign-up-left ' style={styling}>
        {/* <img src={logo.src} alt='' /> */}
      </div>
    </>
  );
};

export default SignUpLeft;
