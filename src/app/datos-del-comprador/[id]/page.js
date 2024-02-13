import CustomerDetailsPage from "@/pages/CustomerDetailsPage";
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
    title: `Proceso de compra ${event.nombre_evento} en ${event.lugar} - ${event.ciudad}`,
    description: event.desc_evento,
    openGraph: {
      title: `Venta de entradas ${event.nombre_evento} en ${event.lugar} - ${event.ciudad}`,
      description: event.desc_evento,
      locale: "es_ES",
      type: "website",
      url: `https://www.taquillacentral.com/datos-del-comprador/${id}`,
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
      canonical: `https://www.taquillacentral.com/datos-del-comprador/${id}`,
    },
  };
}

const Page = ({ params }) => {
  return <CustomerDetailsPage id={params.id} />;
};

export default Page;
