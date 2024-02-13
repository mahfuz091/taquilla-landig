"use client";
import { Col, Container, Row } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import Link from "next/link";

const Swiperslide = ({
  column,
  nombre,
  desc_evento,
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

  // Limita la cantidad de caracteres a 180 y agrega "..." al final si es necesario
  const maxLength = 60;
  let trimmedDesc = desc_evento;

  if (desc_evento.length > maxLength) {
    trimmedDesc = desc_evento.substring(0, maxLength - 3) + "...";
  }

  return (
    <>
      <Link href={toValue}>
        <SwiperSlide className="banner-slider">
          <img src={url_imagen} alt="" />
          <div className="banner-gradient"></div>
          <Container>
            <div className="banner-content container">
              <h2>{nombre}</h2>
              <p>{trimmedDesc}</p>
            </div>
          </Container>
        </SwiperSlide>
      </Link>
    </>
  );
};

export default Swiperslide;
