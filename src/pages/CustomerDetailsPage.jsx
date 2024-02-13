"use client";
import CustomerDetails from "../components/CustomerDetails/CustomerDetails";
import EventDetails from "../components/EventDetails/EventDetails";
import PageBanner from "../components/PageBanner/PageBanner";
import React, { useState, useEffect, useRef } from "react";

const CustomerDetailsPage = ({ id }) => {
  const [event, setevent] = useState([]);

  useEffect(() => {
    const element = document.getElementById("customer-info");

    const scrollToElement = () => {
      if (element) {
        const yOffset =
          element.getBoundingClientRect().top + window.scrollY - 50;
        window.scrollTo({
          top: yOffset,
          behavior: "smooth",
        });
      }
    };

    // Esperar 1 segundo antes de realizar el desplazamiento
    const delay = 500; // 1000 milisegundos (1 segundo)
    const timer = setTimeout(scrollToElement, delay);

    // Limpia el temporizador si el componente se desmonta antes de que ocurra el desplazamiento
    return () => clearTimeout(timer);
  }, []);

  //Get Event
  useEffect(() => {
    if (id !== undefined) {
      fetch("https://taquillacentral.com/api/event/" + id)
        .then((result) => result.json())
        .then((res) => {
          if (Array.isArray(res) && res.length > 0) {
            // Comprobamos que la respuesta sea un array y tenga al menos un objeto
            const modifiedRes = res.map((event) => {
              return { ...event, onBuy: 0 }; // Agregamos la propiedad onBuy con el valor de 0 a cada elemento del array
            });
            setevent(modifiedRes[0]); // Accedemos a la propiedad id_evento del primer objeto del array
          } else {
            throw new Error(
              "La respuesta de la API no es un array o está vacía"
            ); // Si la respuesta no es un array o está vacía, lanzamos un error
          }
          console.log(res);
        })
        .catch((res) => {});
    }
  }, [id]);
  return (
    <>
      <PageBanner event={event} />
      <EventDetails event={event} />
      <CustomerDetails />
    </>
  );
};

export default CustomerDetailsPage;
