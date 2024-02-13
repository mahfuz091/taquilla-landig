"use client";
import { useState } from "react";
import { Col } from "react-bootstrap";
import Calendar from "./images/calendar.svg";
import Pointer from "./images/pointer.svg";
import thumbnail from "./thumb.png";
import { useEffect } from "react";
import Link from "next/link";

const options = { year: "numeric", month: "long", day: "numeric" };

const Event = ({
  column,
  nombre,
  apertura_puertas,
  cierre_puertas,
  fecha,
  precio,
  url_imagen,
  id_evento,
  lugar,
  venta_externa,
  grupo,
}) => {
  const [toValue, setToValue] = useState("");
  useEffect(() => {
    if (venta_externa !== null && venta_externa !== "") {
      setToValue(
        "/espaciozity/" +
          nombre
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/-/g, " ")
            .replace(/\s+/g, "-") +
          "-" +
          id_evento
      );
    } else if (grupo == 1) {
      setToValue(
        "/grupo-eventos/" +
          nombre
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/-/g, " ")
            .replace(/\s+/g, "-") +
          "-" +
          id_evento
      );
    } else {
      setToValue(
        "/entradas/" +
          nombre
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/-/g, " ")
            .replace(/\s+/g, "-") +
          "-" +
          id_evento
      );
    }
  }, [id_evento]);
  const fecha_V = new Date(fecha); // Reemplaza esto con tu variable 'fecha'
  const options = { weekday: "long", day: "numeric", month: "short" };
  const fechaFormateada = `${fecha_V.toLocaleDateString(
    "es-ES",
    options
  )}`.replace(/ /g, "-");

  // Capitaliza la primera letra del mes
  const partesFecha = fechaFormateada.split("-");
  const diaCapitalizado =
    partesFecha[0].charAt(0).toUpperCase() + partesFecha[0].slice(1);
  const mesCapitalizado =
    partesFecha[2].charAt(0).toUpperCase() + partesFecha[2].slice(1);

  // Convierte las cadenas en objetos de fecha
  const fechaApertura = new Date(apertura_puertas);
  const fechaCierre = new Date(cierre_puertas);

  // Calcula la diferencia en milisegundos
  const diferenciaEnMilisegundos = fechaCierre - fechaApertura;

  // Calcula la diferencia en horas
  const diferenciaEnHoras = diferenciaEnMilisegundos / (1000 * 60 * 60);
  var fechaFinal = "";
  // Verifica si la diferencia es mayor a 24 horas
  if (diferenciaEnHoras > 24) {
    fechaFinal = `Varias Fechas`;
  } else {
    fechaFinal = `${diaCapitalizado} ${partesFecha[1]} ${mesCapitalizado}`;
  }

  return (
    <>
      <Col xl={column} lg={6} md={6}>
        <div
          className={`event-item ${
            column == 3 ? "small-event" : "large-event"
          }`}
        >
          <div className="event-image">
            <div
              className="event-image-thumbnail"
              style={{
                backgroundImage: `url(${url_imagen})`,
              }}
            ></div>
            <span className="event-date">
              <img src={Calendar.src} alt="" />{" "}
              {grupo == 0 ? fechaFinal : "Varias Fechas"}
            </span>
          </div>
          <div className="event-content">
            <h4>{nombre}</h4>
            <p className="location">
              <img src={Pointer.src} alt="" /> {lugar}
            </p>
            <div className="event-meta">
              <div className="price">
                <p>Desde</p>
                <span>€{parseFloat(precio).toFixed(2)}</span>
              </div>
              <Link
                style={{ cursor: "pointer" }}
                className="cart-button"
                href={toValue}
              >
                <i className="fas fa-shopping-cart"></i> Comprar
              </Link>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Event;
