"use client";
import React from "react";
import logo from "../components/SignInLeft/image/LOGO TAQUILLA CENTRAL-01 1.png";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
// import SignInLeft from "@/components/SignInLeft/SignInLeft";
import SignInRight from "@/components/SignInRight/SignInRight";
import img from "../assets/image/sign-in-bg.png";
const styling = {
  backgroundImage: `url('${img.src}') `,
  // width: "100%",
  // height: "100vh",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const SignInPage = () => {
  return (
    <main className='sign-in'>
      <header className='sign-up-header'>
        <Container>
          <div className='d-flex justify-content-between header'>
            <img className='' src={logo.src} alt='' />
            <div className=' d-flex align-items-center right'>
              <p className='already'>Dont have an account? </p>
              <Link href='/sign-up' className='sign-in-btn'>
                Sign Up
              </Link>
            </div>
          </div>
        </Container>
      </header>
      <Row style={{ minHeight: "100vh" }}>
        <Col lg={5} style={styling}>
          {/* <SignInLeft /> */}
        </Col>
        <Col lg={7} style={{ margin: "auto 0" }}>
          <SignInRight />
        </Col>
      </Row>
    </main>
  );
};

export default SignInPage;
