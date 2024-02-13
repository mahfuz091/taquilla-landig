import ThankYouPage from "@/pages/ThankYouPage";
import React from "react";

export const metadata = {
  title: `Gracias por comprar en Taquilla Central`,
  description: `Se han enviado las entradas y el recibo de su compra a la cuenta de correo electrónico proporcionada`,
  openGraph: {
    title: `Gracias por comprar en Taquilla Central`,
    description: `Se han enviado las entradas y el recibo de su compra a la cuenta de correo electrónico proporcionada`,
    locale: "es_ES",
    type: "website",
    url: `https://www.taquillacentral.com/compra-correcta`,
  },
  alternates: {
    canonical: `https://www.taquillacentral.com/compra-correcta`,
  },
};
const Page = () => {
  return <ThankYouPage />;
};

export default Page;
