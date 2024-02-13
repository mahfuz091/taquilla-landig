"use client";
import { Col, Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import ThankYouMessage from "../components/ThankyouMessage/ThankYouMessage";
import ThankyouTickets from "../components/ThankyouTickets/ThankyouTickets";

const ThankYouPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [events, setEvents] = useState([]);
  var [price, setPrice] = useState(0);
  const [id_sesion, setid_sesion] = useState("");

  useEffect(() => {
    const id_sesionl = JSON.parse(localStorage.getItem("id_sesion"));
    if (id_sesionl !== undefined && id_sesionl !== "" && id_sesionl !== null) {
      fetch("https://api.taquillacentral.com/personByReference/" + id_sesionl)
        .then((result) => {
          if (result.ok) {
            return result.json();
          }
          throw new Error("Error");
        })
        .then((res) => {
          setEvents(res);
          console.log(res);
        })
        .catch((res) => {
          alert(res);
        });
    }
    setid_sesion(id_sesionl);
  }, []);

  useEffect(() => {
    if (events) {
      var precio = 0.0;
      events.forEach((e) => {
        precio += parseFloat(e.importe);
      });
      setPrice(precio);
    } else {
      return;
    }
  }, [events]);

  return (
    <>
      <ThankYouMessage />
      {id_sesion !== undefined && id_sesion !== "" && id_sesion !== null ? (
        <div className="thank-you-page-details">
          <Container>
            <Row>
              <Col xl={8} lg={12}>
                <ThankyouTickets events={events} />
              </Col>
              <Col xl={4} lg={12}>
                <div className="thank-you-customer-info">
                  <h3>Datos del comprador</h3>
                  <ul>
                    <li>
                      <span>Nombre:</span>
                      <span>
                        {events[0] !== undefined
                          ? events[0].nombre
                          : events.nombre}
                      </span>
                    </li>
                    <li>
                      <span>Correo:</span>
                      <span>
                        {events[0] !== undefined
                          ? events[0].correo
                          : events.correo}
                      </span>
                    </li>
                    <li>
                      <span>DNI / Pasaporte / ID:</span>
                      <span>
                        {events[0] !== undefined ? events[0].dni : events.dni}
                      </span>
                    </li>
                    {/*<li>
                    <span>Fecha de Nacimiento:</span>
                    <span>{events[0] !== undefined ? events[0].fecha_nacimiento : events.fecha_nacimiento}</span>
  </li>*/}
                    <li>
                      <span>Teléfono:</span>
                      <span>
                        {events[0] !== undefined
                          ? events[0].telefono
                          : events.telefono}
                      </span>
                    </li>
                    <li>
                      <span>Código Postal:</span>
                      <span>
                        {events[0] !== undefined
                          ? events[0].codigo_postal
                          : events.codigo_postal}
                      </span>
                    </li>
                    <li>
                      <span>Genero:</span>
                      <span>
                        {events[0] !== undefined
                          ? events[0].genero
                          : events.genero}
                      </span>
                    </li>
                  </ul>
                  <span className="line-break"></span>
                  <h3>Resumen del pedido</h3>
                  <ul>
                    {/*<li>
                    <span>Price</span>
                    <span>€1,725.00</span>
                  </li>
                  <li>
                    <span>Discount 10%</span>
                    <span className='red-text'>-€125.00</span>
                  </li>*/}
                    <li>
                      <span>Precio Total</span>
                      <span>€{parseFloat(price).toFixed(2)}</span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ThankYouPage;
