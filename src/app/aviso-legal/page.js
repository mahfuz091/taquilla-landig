import AvisoLegalPage from "@/pages/AvisoLegalPage";
import React from "react";
export const metadata = {
  title: `Aviso legal de Taquilla Central`,
  openGraph: {
    title: `Aviso legal de Taquilla Central`,
    locale: "es_ES",
    type: "website",
    url: `https://www.taquillacentral.com/aviso-legal`,
  },
  alternates: {
    canonical: `https://www.taquillacentral.com/aviso-legal`,
  },
};
const Page = () => {
  return <AvisoLegalPage />;
};

export default Page;
