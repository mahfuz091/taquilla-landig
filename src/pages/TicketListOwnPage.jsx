"use client";
import EventDetails from "../components/EventDetails/EventDetails";
import NextEvents from "../components/NextEvents/NextEvents";
import PageBanner from "../components/PageBanner/PageBanner";
import TicketsOwn from "../components/TicketsOwn/TicketsOwn";
import React, { useState, useEffect } from "react";

const TicketListOwnPage = ({ id }) => {
  const [event, setevent] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const getQueryParam = (key) => {
            const query = window.location.search.substring(1);
            const params = query.split('&');
            for (let i = 0; i < params.length; i++) {
                const pair = params[i].split('=');
                if (decodeURIComponent(pair[0]) === key) {
                    return decodeURIComponent(pair[1]);
                }
            }
            return null;
        };

        const ref = getQueryParam('ref'); // Obtener el parámetro 'ref' de la URL
        if (ref) {
            localStorage.setItem('refID', ref);
        } else {
            localStorage.removeItem('refID');
        }
    }, []);
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
          console.log(modifiedRes[0]);
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
      <TicketsOwn event={event} />
      <NextEvents />
    </>
  );
};

export default TicketListOwnPage;
