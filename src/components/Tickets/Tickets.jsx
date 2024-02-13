"use client";
import Script from "next/script";
import { useEffect, useRef } from "react";

const Tickets = ({ event }) => {
  const scriptRef = useRef(null);

  useEffect(() => {
    if (scriptRef.current !== null) {
      const scriptElement = scriptRef.current;
      console.log(scriptElement.src);
    }
  }, [event]);

  return (
    <>
      <section className="ticket-list-section theme-border">
        <div
          id={"evezing-shop-" + event.venta_externa}
          style={{ paddingBottom: "15px" }}
        >
          <p
            className="evezing-shop-checking"
            style={{
              padding: "15px",
              fontSize: "16px",
              textAlign: "center",
              color: "#666",
            }}
          >
            Comprobando disponibilidad de entradas...
          </p>
        </div>
        {event.venta_externa && (
          <Script
            src={
              "https://entradaszaragozapilar.evezing.com/iframe-shop/event/" +
              event.venta_externa
            }
            id={"evezing-script-" + event.venta_externa}
            type="text/javascript"
          ></Script>
        )}
      </section>
    </>
  );
};

export default Tickets;
// {event.venta_externa && (
//   <Head>
//     <script
//       ref={scriptRef}
//       src={
//         "https://entradaszaragozapilar.evezing.com/iframe-shop/event/" +
//         event.venta_externa
//       }
//       id={"evezing-script-" + event.venta_externa}
//       type="text/javascript"
//     ></script>
//   </Head>
// )}
