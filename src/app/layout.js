// "use client";
import Header from "@/components/Header/Header";
import "./globals.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weights: [400, 500, 600, 700, 800, 900],
});
// export const metadata = {
//   metadataBase: "",
// };

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={plus_jakarta_sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
