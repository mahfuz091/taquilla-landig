"use client";
import { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Button, Offcanvas } from "react-bootstrap";
import Logo from "./images/logo.png";
import TypeAhead from "./TypeAhead";
import Hamburger from "./images/hamburger.svg";
import Link from "next/link";
import Image from "next/image";
import OffCanvas from "./OffCanvas";
import axios from "axios";
import plus from "./images/+.png";
import { usePathname } from "next/navigation";
import { disableNavWithFooter } from "@/utils/diasableNavWithheaderFooter";
import profile from "./images/profile.png";
import arrow from "./images/downarrow.png";
import triangle from "./images/triangle.svg";

async function getEvents(setEvents) {
  try {
    let response = await axios("https://taquillacentral.com/api/events");
    response = response.data;
    response.forEach((node) => (node.onBuy = 0));
    response.sort((a, b) =>
      new Date(a.apertura_puertas) > new Date(b.apertura_puertas) ? 1 : -1
    );
    setEvents(response);
  } catch (error) {
    setEvents([]);
  }
}
const HeaderMain = () => {
  const path = usePathname();
  const [events, setEvents] = useState([]);
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(false);
  const [dropDown, setDropDown] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = () => {
    if (dropDown === true) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };
  // console.log(auth);

  useEffect(() => {
    getEvents(setEvents);
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (auth === true) {
      setAuth(true);
    }
    // console.log(auth);
  }, [path]);

  return (
    <>
      {!disableNavWithFooter.includes(path) && (
        <>
          <OffCanvas
            events={events}
            show={show}
            handleClose={handleClose}
            auth={auth}
            handleSelect={handleSelect}
            dropDown={dropDown}
          />
          <header id='top'>
            <Container>
              <Row className='align-items-center'>
                <Col xs={5}>
                  <div className='search d-none d-md-block'>
                    <div className='header-input'>
                      <TypeAhead events={events} handleClose={handleClose} />
                      <div className='input-content'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.25 12.5C10.1495 12.5 12.5 10.1495 12.5 7.25C12.5 4.35051 10.1495 2 7.25 2C4.35051 2 2 4.35051 2 7.25C2 10.1495 4.35051 12.5 7.25 12.5Z'
                            stroke='#7B788A'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M10.9629 10.9626L14.0004 14.0002'
                            stroke='#7B788A'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleShow}
                    className='mobile-search-button d-md-none'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                    >
                      <path
                        d='M7.25 12.5C10.1495 12.5 12.5 10.1495 12.5 7.25C12.5 4.35051 10.1495 2 7.25 2C4.35051 2 2 4.35051 2 7.25C2 10.1495 4.35051 12.5 7.25 12.5Z'
                        stroke='#7B788A'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M10.9629 10.9626L14.0004 14.0002'
                        stroke='#7B788A'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </Col>
                <Col xs={2}>
                  <div className='site-logo text-center'>
                    <Link href='/'>
                      <img className='logo' src={Logo.src} alt='logo' />
                    </Link>
                  </div>
                </Col>
                <Col xs={5}>
                  <div className='menu-trigger d-md-none' onClick={handleShow}>
                    <img src={Hamburger.src} alt='' />
                  </div>
                  {auth ? (
                    <div className='justify-content-end d-none d-md-flex'>
                      <button className='create-event-btn d-none d-lg-flex'>
                        <img src={plus.src} alt='' />
                        Crear nuevo evento
                      </button>
                      <div
                        className='header-right-profile position-relative'
                        onClick={handleSelect}
                      >
                        <img src={profile.src} alt='' />
                        <div className='header-right-profile-desc'>
                          <h4>John Deo</h4>
                          {/* <img src={arrow.src} alt='' /> */}
                          <i
                            className={`fas fa-angle-${
                              dropDown === true ? "up" : "down"
                            }`}
                          ></i>
                        </div>
                        {dropDown && (
                          <div className='select-options'>
                            <img src={triangle.src} alt='' />
                            <div className='select-option'>
                              Gestionar mis eventos
                            </div>
                            <div className='select-option'>Mis entradas</div>
                            <div className='select-option'>Ajustes</div>
                            <div className='select-option'>Cerrar sesión</div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className='d-none d-md-flex justify-content-end'>
                        <button className='create-event-btn d-none d-xxl-flex'>
                          <img src={plus.src} alt='' />
                          Crear nuevo evento
                        </button>
                        <Link href='/sign-up'>
                          <button className='create-event-btn '>
                            <img src={plus.src} alt='' />
                            Regístrate
                          </button>
                        </Link>
                        <button className='sesion-btn d-none d-md-inline'>
                          <img src={plus.src} alt='' />
                          Iniciar Sesion
                        </button>
                      </div>
                    </>
                  )}
                </Col>
              </Row>
            </Container>
          </header>
        </>
      )}
    </>
  );
};

export default HeaderMain;
