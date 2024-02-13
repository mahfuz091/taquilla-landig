import { Col, Container, Row } from "react-bootstrap";
import PageBannerBg from "./bg.png";
import { Link } from "@mui/material";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const PageBannerGroup = ({ event }) => {
  return (
    <section
      className="page-banner-section"
      style={{ backgroundImage: `url(${PageBannerBg.src})` }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <div className="breadcrumb-text">
              <p>{"Varias fechas"}</p>
              <h1>{event.nombre_evento}</h1>
            </div>
          </Col>
          <Col lg={4} className="text-end">
            <div className="page-banner-button">
              <Link href="/">
                <i className="fas fa-angle-left"></i> Volver
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageBannerGroup;
