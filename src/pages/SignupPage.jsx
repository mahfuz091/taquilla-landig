"use client";
// import SignUpLeft from "@/components/SignUpLeft/SignUpLeft";
import SignUpRight from "@/components/SignUpRight/SignUpRight";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../components/SignUpLeft/image/LOGO TAQUILLA CENTRAL-01 1.png";
import Link from "next/link";
import img from "../assets/image/sign-up-bg.png";

const SignupPage = () => {
  const styling = {
    background: `url('${img.src}') no-repeat`,
    // width: "100%",
    // height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <main className='sign-up'>
      <header className='sign-up-header'>
        <Container>
          <div className='d-flex justify-content-between header'>
            <img className='' src={logo.src} alt='' />
            <div className=' d-flex align-items-center right'>
              <p className='already'>Already have an account? </p>
              <Link href='/sign-in' className='sign-in-btn'>
                Sign in
              </Link>
            </div>
          </div>
        </Container>
      </header>
      <Row style={{ minHeight: "100vh" }}>
        <Col lg={5} style={styling}>
          {/* <SignUpLeft /> */}
        </Col>
        <Col lg={7} style={{ margin: "auto 0" }}>
          <SignUpRight />
        </Col>
      </Row>
    </main>
  );
};

export default SignupPage;
