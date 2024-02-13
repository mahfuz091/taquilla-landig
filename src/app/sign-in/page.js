import SignInPage from "@/pages/SignInPage";
import React from "react";

export const metadata = {
  title: `Taquilla Central Sign In`,
  openGraph: {
    title: `Taquilla Central Sign In`,
    locale: "es_ES",
    type: "website",
    url: `https://www.taquillacentral.com/sign-up`,
  },
  alternates: {
    canonical: `https://www.taquillacentral.com/sign-up`,
  },
};

const page = () => {
  return <SignInPage />;
};

export default page;
