"use client";
import Swiperslide from "../SwiperSlide/swiperslide";

import swiper from "./swiper";

// Import Swiper styles

import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
const { Swiper, SwiperSlide } = swiper;
async function getEvents(setEvents) {
  try {
    let events = await axios(
      "https://taquillacentral.com/api/important_events"
    );
    events = events.data;
    events.forEach((node) => (node.onBuy = 0));
    events.sort((a, b) =>
      new Date(a.apertura_puertas) > new Date(b.apertura_puertas) ? 1 : -1
    );

    setEvents(events);
  } catch (error) {
    setEvents([]);
  }
}
const Banner = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents(setEvents);
  }, []);

  return (
    <section className="banner-section">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {events.length > 0 &&
          events.map((item, idx) => (
            <SwiperSlide key={item.id}>
              <Swiperslide
                nombre={item.nombre_evento}
                desc_evento={item.desc_evento}
                apertura_puertas={item.apertura_puertas}
                fecha={item.fecha}
                precio={item.min_precio}
                url_imagen={item.url_imagen}
                id_evento={item.id}
                lugar={item.lugar}
                venta_externa={item.venta_externa}
                grupo={item.grupo}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;
