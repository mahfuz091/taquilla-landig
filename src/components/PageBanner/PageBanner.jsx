import { Col, Container, Row } from "react-bootstrap";
import PageBannerBg from "./bg.png";
import { useState, useEffect } from "react";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const PageBanner = ({ event }) => {
  const [fecha1, setFecha1] = useState("");
  const [fecha2, setFecha2] = useState("");

  useEffect(() => {
    console.log(event);
    if (event.apertura_puertas !== undefined) {
      setFecha1(event.apertura_puertas.split(" ")[0]);
      console.log(event.apertura_puertas.split(" ")[0]);
      setFecha2(event.cierre_puertas.split(" ")[0]);
      console.log(event.cierre_puertas.split(" ")[0]);
    }
  }, [event]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <section
      className="page-banner-section"
      style={{ backgroundImage: `url(${PageBannerBg.src})` }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <div className="breadcrumb-text">
              <p>
                {fecha1 === fecha2
                  ? new Date(event.fecha)
                      .toLocaleDateString("es-ES", options)
                      .replace(
                        /^./,
                        new Date(event.fecha)
                          .toLocaleDateString("es-ES", options)
                          .charAt(0)
                          .toUpperCase()
                      )
                  : "Desde el " +
                    new Date(event.fecha)
                      .toLocaleDateString("es-ES", options)
                      .replace(
                        /^./,
                        new Date(event.fecha)
                          .toLocaleDateString("es-ES", options)
                          .charAt(0)
                          .toUpperCase()
                      )}
              </p>
              <h1>{event.nombre_evento}</h1>
            </div>
          </Col>
          <Col lg={4} className="text-end">
            <div className="page-banner-button">
              <div style={{ cursor: "pointer" }} onClick={handleGoBack}>
                <i className="fas fa-angle-left"></i> Volver
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageBanner;
