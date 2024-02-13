import TerminosPage from "@/pages/TerminosPage";
import React from "react";
export const metadata = {
  title: `Términos y condiciones de venta de Taquilla Central`,
  openGraph: {
    title: `Términos y condiciones de venta de Taquilla Central`,
    locale: "es_ES",
    type: "website",
    url: `https://www.taquillacentral.com/terminos-y-condiciones`,
  },
  alternates: {
    canonical: `https://www.taquillacentral.com/terminos-y-condiciones`,
  },
};
const Page = () => {
  return <TerminosPage />;
};

export default Page;
