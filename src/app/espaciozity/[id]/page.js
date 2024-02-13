import TicketListPage from "@/pages/TicketListPage";
import React from "react";

export async function generateMetadata({ params }) {
  const id = params.id;
  const event = await fetch(
    "https://taquillacentral.com/api/event/" +
      id.split("-")[id.split("-").length - 1]
  )
    .then((result) => result.json())
    .then((res) => {
      if (Array.isArray(res) && res.length > 0) {
        const modifiedRes = res.map((event) => {
          return { ...event, onBuy: 0 };
        });
        return modifiedRes[0];
      }
    });

  return {
    title: `Venta de entradas ${event.nombre_evento} en ${event.lugar} - ${event.ciudad}`,
    description: event.desc_evento,
    openGraph: {
      title: `Venta de entradas ${event.nombre_evento} en ${event.lugar} - ${event.ciudad}`,
      description: event.desc_evento,
      locale: "es_ES",
      type: "website",
      url: `https://www.taquillacentral.com/espaciozity/${id}`,
      images: [
        {
          url: event.url_imagen_evento
            ? event.url_imagen_evento
            : event.url_imagen,
          width: 800,
          height: 600,
        },
      ],
    },
    alternates: {
      canonical: `https://www.taquillacentral.com/espaciozity/${id}`,
    },
  };
}

const TicketList = ({ params }) => {
  return <TicketListPage id={params.id} />;
};

export default TicketList;
