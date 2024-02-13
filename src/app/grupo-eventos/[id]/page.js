import EventGroupListPage from "@/pages/EventGroupListPage";
import React from "react";

export async function generateMetadata({ params }) {
  const id = params.id;
  const event_group = await fetch(
    "https://taquillacentral.com/api/event-group/" +
      id.split("-")[id.split("-").length - 1]
  )
    .then((result) => result.json())
    .then((res) => {
      return res.grupo_evento[0];
    });
  return {
    title: `Venta de entradas ${event_group.nombre_evento} en ${event_group.lugar} - ${event_group.ciudad}`,
    description: event_group.desc_evento,
    openGraph: {
      title: `Venta de entradas ${event_group.nombre_evento} en ${event_group.lugar} - ${event_group.ciudad}`,
      description: event_group.desc_evento,
      locale: "es_ES",
      type: "website",
      url: `https://www.taquillacentral.com/grupo-eventos/${id}`,
      images: [
        {
          url: event_group.url_imagen_evento
            ? event_group.url_imagen_evento
            : event_group.url_imagen,
          width: 800,
          height: 600,
        },
      ],
    },
    alternates: {
      canonical: `https://www.taquillacentral.com/grupo-eventos/${id}`,
    },
  };
}

const EventGroupList = ({ params }) => {
  return <EventGroupListPage id={params.id} />;
};

export default EventGroupList;
