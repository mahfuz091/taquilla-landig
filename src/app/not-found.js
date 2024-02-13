import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
export const metadata = {
  title: `Error en la compra`,
  openGraph: {
    title: `Error en la compra`,
    locale: "es_ES",
    type: "website",
    url: `https://www.taquillacentral.com`,
  },
  alternates: {
    canonical: `https://www.taquillacentral.com`,
  },
};
export default function NotFound() {
  return <ErrorMessage />;
}
