"use client";
import { useState, useEffect } from "react";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import Event from "../Event/Event";
import triangle from "./triangle.svg";
import axios from "axios";
async function getEvents(setevents, setEventsParent) {
  try {
    let events = await axios("https://taquillacentral.com/api/events");
    events = events.data;
    events.forEach((node) => (node.onBuy = 0));
    events.sort((a, b) =>
      new Date(a.apertura_puertas) > new Date(b.apertura_puertas) ? 1 : -1
    );
    setevents(events);
    setEventsParent(events);
  } catch (error) {
    setevents([]);
    setEventsParent([]);
  }
}
const EventList = () => {
  const [eventsParent, setEventsParent] = useState([]);
  const [dropDown, setDropDown] = useState("");
  const [selected, setSelected] = useState("Próximos");
  const [events, setevents] = useState([]);

  const handleSelect = () => {
    if (dropDown === true) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };

  const handleChangeDropdown = (option) => {
    setSelected(option);

    switch (option) {
      case "Alfabeticamente, A-Z":
        setevents(
          eventsParent.sort((a, b) =>
            a.nombre_evento > b.nombre_evento ? 1 : -1
          )
        );
        break;

      case "Alfabeticamente, Z-A":
        setevents(
          eventsParent.sort((a, b) =>
            a.nombre_evento < b.nombre_evento ? 1 : -1
          )
        );
        break;

      case "Próximos":
        setevents(
          eventsParent.sort((a, b) =>
            new Date(a.apertura_puertas) > new Date(b.apertura_puertas) ? 1 : -1
          )
        );
        break;
      default:
        break;
    }
    setDropDown(false);
  };

  //Get Events
  useEffect(() => {
    localStorage.removeItem("id_sesion");
    localStorage.removeItem("entradas");
    localStorage.removeItem("id_evento");
    getEvents(setevents, setEventsParent);
  }, []);

  return (
    <>
      <section className='eventlist-section'>
        <Container>
          <Row className='section-details'>
            <Col md={8}>
              <div className='section-title'>
                <h2>Todos los eventos</h2>
              </div>
            </Col>
            <Col md={4}>
              <div className='select-custom'>
                <div
                  onClick={handleSelect}
                  className={`select-button ${dropDown && "active"}`}
                >
                  {selected}
                  <i
                    className={`fas fa-angle-${
                      dropDown === true ? "up" : "down"
                    }`}
                  ></i>
                </div>
                {dropDown && (
                  <div className='select-options'>
                    <img src={triangle.src} alt='' />
                    <div
                      className='select-option'
                      onClick={() => handleChangeDropdown("Próximos")}
                    >
                      Próximos
                    </div>
                    <div
                      className='select-option'
                      onClick={() =>
                        handleChangeDropdown("Alfabeticamente, A-Z")
                      }
                    >
                      Alfabeticamente, A-Z
                    </div>
                    <div
                      className='select-option'
                      onClick={() =>
                        handleChangeDropdown("Alfabeticamente, Z-A")
                      }
                    >
                      Alfabeticamente, Z-A
                    </div>
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Row className='g-4'>
            {Array.from(events).map((item, idx) => (
              <Event
                column='3'
                key={item.id}
                nombre={item.nombre_evento}
                apertura_puertas={item.apertura_puertas}
                cierre_puertas={item.cierre_puertas}
                fecha={item.fecha}
                precio={item.min_precio}
                url_imagen={item.url_imagen}
                id_evento={item.id}
                lugar={item.lugar}
                venta_externa={item.venta_externa}
                grupo={item.grupo}
              />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default EventList;
