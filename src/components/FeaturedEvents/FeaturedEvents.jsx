"use client";
import { Col, Container, Row } from "react-bootstrap";
import Event from "../Event/Event";
import { useEffect, useState } from "react";
import axios from "axios";
async function getEvents(setEvents) {
  try {
    let events = await axios(
      "https://taquillacentral.com/api/important_events"
    );
    events = events.data;
    events.forEach((node) => (node.onBuy = 0));
    events.sort((a, b) =>
      new Date(a.apertura_puertas) > new Date(b.apertura_puertas) ? 1 : -1
    );
    setEvents(events);
  } catch (error) {
    setEvents([]);
  }
}
const FeaturedEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents(setEvents);
  }, []);

  return (
    <>
      <section className="event-section">
        <Container>
          <Row className="section-details">
            <Col md={6}>
              <div className="section-title">
                <h2>Eventos destacados</h2>
              </div>
            </Col>
          </Row>
          <Row className="g-4">
            {Array.from(events).map((item, idx) => (
              <Event
                column="4"
                key={item.id}
                nombre={item.nombre_evento}
                apertura_puertas={item.apertura_puertas}
                cierre_puertas={item.cierre_puertas}
                fecha={item.fecha}
                precio={item.min_precio}
                url_imagen={item.url_imagen}
                id_evento={item.id}
                lugar={item.lugar}
                venta_externa={item.venta_externa}
                grupo={item.grupo}
              />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FeaturedEvents;
