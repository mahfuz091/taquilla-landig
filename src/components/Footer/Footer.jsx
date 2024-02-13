"use client";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "./logo.png";
import GooglePlay from "./googleplay.png";
import AppStore from "./appstore.png";
import Payment from "./payment.png";
import USA from "./usa.svg";
import "./footer.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { disableNavWithFooter } from "@/utils/diasableNavWithheaderFooter";
import { useEffect, useState } from "react";

const Footer = () => {
  const path = usePathname();

  return (
    <>
      {!disableNavWithFooter.includes(path) && (
        <footer>
          <Container className='footer-arrow'>
            <Row>
              <Col className='text-end'>
                <span className='arrow-top'>
                  <a href='#top'>
                    <i className='fas fa-angle-up'></i>
                  </a>
                </span>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className='justify-content-between'>
              <Col xl={3} lg={6}>
                <div className='footer-box footer-first'>
                  <img src={Logo.src} alt='Logo' />
                  <h4>Síguenos</h4>
                  <ul className='social-media'>
                    <li>
                      <a
                        href='https://twitter.com/taquillacentral'
                        target='_blank'
                      >
                        <i className='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='' target='_blank'>
                        <i className='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.instagram.com/taquillacentral'
                        target='_blank'
                      >
                        <i className='fab fa-instagram'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.linkedin.com/company/taquilla-central'
                        target='_blank'
                      >
                        <i className='fab fa-linkedin-in'></i>
                      </a>
                    </li>
                  </ul>
                  {/*<div className='language-switcher'>
                <span>
                  <Image src={USA} alt='' /> English <i className='fas fa-angle-down'></i>
                </span>
              </div>*/}
                </div>
              </Col>
              <Col xl={3} lg={6}>
                <div className='footer-box footer-menu'>
                  <h4>Taquilla Central</h4>
                  <ul>
                    {/*<li>
                  <a href=''>Contacto</a>
                </li>
                <li>
                  <a href=''>Quiénes somos?</a>
                </li>*/}
                    <li>
                      <Link href='/aviso-legal'>Aviso Legal</Link>
                    </li>
                    <li>
                      <Link href='/terminos-y-condiciones'>
                        Terminos y condiciones
                      </Link>
                    </li>
                    <li>
                      <Link href='/politica-cookies'>Política de Cookies</Link>
                    </li>
                    <li>
                      <Link href='/politica-privacidad'>
                        Política de Privacidad
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={3} lg={6}>
                <div className='footer-box footer-contact'>
                  <h4>Datos de contacto</h4>
                  <div className='contact-information'>
                    <div className='contact-info'>
                      <h4>Teléfono:</h4>
                      <p>
                        <a href='tel:+34644507541'>644 50 75 41</a>
                      </p>
                    </div>
                    <div className='contact-info'>
                      <h4>Correo:</h4>
                      <p>
                        <a href='mailto:info@taquillacentral.com'>
                          info@taquillacentral.com
                        </a>
                      </p>
                    </div>
                    <div className='contact-info'>
                      <h4>Oficina:</h4>
                      <p>Paseo Independencia 24-26, local 25 (Zaragoza) </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={6}>
                <div className='footer-box footer-payment'>
                  <h4>Descarga la app</h4>
                  <div className='footer-buttons '>
                    <a href=''>
                      <img src={GooglePlay.src} alt='' />
                    </a>
                    <a href=''>
                      <img src={AppStore.src} alt='' />
                    </a>
                  </div>

                  <h4>Método de pago</h4>
                  <div className='payment-gateways'>
                    <img src={Payment.src} alt='' />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <div className='copyright'>
            <Container>
              <Row>
                <Col className='text-center'>
                  <p>Derechos de autor &copy; Taquilla Central 2023</p>
                </Col>
              </Row>
            </Container>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
