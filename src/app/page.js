import HomePage from "@/pages/HomePage";
export const metadata = {
  title: "Taquilla Central",
  description:
    "Compra ya tus entradas para conciertos, festivales, parques de atracciones, ocio, cultura y eventos en Taquilla Central sin necesidad de registrarte.",
  openGraph: {
    title: "Taquilla Central",
    description:
      "Compra ya tus entradas para conciertos, festivales, parques de atracciones, ocio, cultura y eventos en Taquilla Central sin necesidad de registrarte.",
    locale: "es_ES",
    type: "website",
    url: "https://www.taquillacentral.com/",
  },
  alternates: {
    canonical: "https://www.taquillacentral.com/",
  },
};
export default function Home() {
  return <HomePage />;
}
