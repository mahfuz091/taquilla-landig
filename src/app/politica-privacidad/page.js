import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import React from "react";

export const metadata = {
  title: `Política de privacidad de Taquilla Central`,
  openGraph: {
    title: `Política de privacidad de Taquilla Central`,
    locale: "es_ES",
    type: "website",
    url: `https://www.taquillacentral.com/politica-privacidad`,
  },
  alternates: {
    canonical: `https://www.taquillacentral.com/politica-privacidad`,
  },
};
const Page = () => {
  return <PrivacyPolicyPage />;
};

export default Page;
