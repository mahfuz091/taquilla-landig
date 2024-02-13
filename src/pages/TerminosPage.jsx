"use client";
import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import PageBannerBg from "../components/PageBanner/bg.png";
import Terminos from "../components/Terminos/Terminos";

const TerminosPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section
        className="page-banner-section privacy-policy"
        style={{ backgroundImage: `url(${PageBannerBg.src})` }}
      >
        <Container>
          <Row className="align-items-center text-center">
            <Col lg={12}>
              <div className="breadcrumb-text">
                <h1>Términos y condiciones de venta</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Terminos />
    </>
  );
};

export default TerminosPage;
