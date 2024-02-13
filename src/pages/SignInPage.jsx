"use client";
import React from "react";
import logo from "../components/SignInLeft/image/LOGO TAQUILLA CENTRAL-01 1.png";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import SignInLeft from "@/components/SignInLeft/SignInLeft";
import SignInRight from "@/components/SignInRight/SignInRight";

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
      <Row>
        <Col lg={5}>
          <SignInLeft />
        </Col>
        <Col lg={7}>
          <SignInRight />
        </Col>
      </Row>
    </main>
  );
};

export default SignInPage;
