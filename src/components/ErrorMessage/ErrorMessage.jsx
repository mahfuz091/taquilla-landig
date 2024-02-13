"use client";
import { Container, Row, Col } from "react-bootstrap";
import Check from "./precaucion_108.png";

const ErrorMessage = () => {
  return (
    <section className="thank-you-section">
      <Container>
        <Row className="justify-content-center">
          <Col xl={8} className="text-center">
            <div className="thank-you-content">
              <img src={Check.src} alt="" />
              <h1>Error de compra</h1>
              <p>
                Se produjo un error al procesar los detalles de tu pago. Vuelve
                a intentarlo más tarde. Si el error persiste, ponte en contacto
                con nosotros a través de info@taquillacentral.com
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ErrorMessage;
