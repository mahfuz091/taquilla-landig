import React from "react";
import PoliticaCookiesPage from "@/pages/PoliticaCookiesPage";
export const metadata = {
  title: `Politica de Cookies de Taquilla Central`,
  openGraph: {
    title: `Politica de Cookies de Taquilla Central`,
    locale: "es_ES",
    type: "website",
    url: `https://www.taquillacentral.com/politica-cookies`,
  },
  alternates: {
    canonical: `https://www.taquillacentral.com/politica-cookies`,
  },
};
const Page = () => {
  return <PoliticaCookiesPage />;
};

export default Page;
