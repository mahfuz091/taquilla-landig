"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import TypeAhead from "./TypeAhead";
import plus from "./images/+.png";
import Link from "next/link";
import profile from "./images/profile.png";
import triangle from "./images/triangle.svg";

const OffCanvas = ({
  events,
  show,
  handleClose,
  auth,
  handleSelect,
  dropDown,
}) => {
  const inputRef = useRef(null);
  console.log(auth);

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Taquilla Central</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Encuentra aquí las entradas de tus eventos favoritos
        <div className='mobile-search' ref={inputRef}>
          <div className='mobile-header-input'>
            <TypeAhead events={events} handleClose={handleClose} />
            <div className='mobile-input-content'>
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
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M10.9629 10.9626L14.0004 14.0002'
                  stroke='#7B788A'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>
        {auth ? (
          <div className='justify-content-end d-flex flex-column mt-4 gap-4 '>
            <a href=''>
              <button className='create-event-btn '>
                <img src={plus.src} alt='' />
                Crear nuevo evento
              </button>
            </a>
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
                    <span>Gestionar mis eventos</span>
                  </div>
                  <div className='select-option'>
                    <span>Mis entradas</span>
                  </div>
                  <div className='select-option'>
                    <span>Ajustes</span>
                    <span>Cerrar sesión</span>
                  </div>
                  {/* <div className='select-option'></div> */}
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className='d-flex flex-column gap-3 justify-content-end mt-4'>
              <a href=''>
                <button className='create-event-btn '>
                  <img src={plus.src} alt='' />
                  Crear nuevo evento
                </button>
              </a>
              <Link href='/sign-up'>
                <button className='create-event-btn '>
                  <img src={plus.src} alt='' />
                  Regístrate
                </button>
              </Link>
              <a href=''>
                <button className='sesion-btn '>
                  <img src={plus.src} alt='' />
                  Iniciar Sesion
                </button>
              </a>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffCanvas;
