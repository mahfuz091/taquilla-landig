"use client";
import EventDetails from "../components/EventDetails/EventDetails";
import NextEvents from "../components/NextEvents/NextEvents";
import PageBanner from "../components/PageBanner/PageBanner";
import Tickets from "../components/Tickets/Tickets";
import React, { useState, useEffect } from "react";

const TicketListPage = ({ id }) => {
  const [event, setevent] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  //Get Event
  useEffect(() => {
    fetch(
      "https://taquillacentral.com/api/event/" +
        id.split("-")[id.split("-").length - 1]
    )
      .then((result) => {
        if (result.ok) {
          return result.json();
        }
        throw new Error("No hay entradas disponibles");
      })
      .then((res) => {
        if (Array.isArray(res) && res.length > 0) {
          // Comprobamos que la respuesta sea un array y tenga al menos un objeto
          const modifiedRes = res.map((event) => {
            return { ...event, onBuy: 0 }; // Agregamos la propiedad onBuy con el valor de 0 a cada elemento del array
          });
          setevent(modifiedRes[0]); // Accedemos a la propiedad id_evento del primer objeto del array
        } else {
          throw new Error("La respuesta de la API no es un array o está vacía"); // Si la respuesta no es un array o está vacía, lanzamos un error
        }
      })
      .catch((res) => {});
  }, [id]);
  return (
    <>
      <PageBanner event={event} />
      <EventDetails event={event} />
      <Tickets event={event} />
      <NextEvents />
    </>
  );
};

export default TicketListPage;
