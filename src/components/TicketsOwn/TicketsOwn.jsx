import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Ticket from "../Ticket/Ticket";
import TicketThumb from "./ticket-thumb.png";
import Button from "@mui/material/Button";
import axios from "axios";
import Artists from "../Artists/Artists";

const TicketsOwn = ({ event }) => {
  const [events, setEvents] = useState([]);
  const [eventsdef, setEventsdef] = useState([]);
  const [dataToSend, setdataToSend] = useState([]);
  const [finalPrice, setfinalPrice] = useState(0.0);
  const [masdeuna, setMasdeuna] = useState(false);
  const [isErrorShown, setisErrorShown] = useState(false);
  const [isFormValid, setisFormValid] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  //Coger entradas
  useEffect(() => {
    if (event.id_evento !== undefined) {
      fetch("https://api.taquillacentral.com/events/" + event.id_evento)
        .then((result) => {
          if (result.ok) {
            return result.json();
          }
          throw new Error("No hay entradas disponibles");
        })
        .then((res) => {
          res.forEach((node) => (node.onBuy = 0));
          setEvents(res);
          console.log(res);
        })
        .catch((res) => {
          alert(res);
        });
    }
  }, [event]);

  const updateEvents = (updatedEvent) => {
    const index = events.findIndex((event) => event.id === updatedEvent.id);
    setEvents((prevEvents) => {
      const newEvents = [...prevEvents];
      newEvents[index] = updatedEvent;
      return newEvents;
    });
  };

  useEffect(() => {
    setEventsdef(events);
  }, [updateEvents]);

  //Calcular precio
  useEffect(() => {
    if (eventsdef) {
      var precio = 0.0;
      var entradasAenviar = [];
      eventsdef.forEach((e) => {
        if (e.onBuy > 0) {
          precio += e.onBuy * parseFloat(e.precio);
          entradasAenviar.push({
            id_entrada: e.id,
            cantidad: e.onBuy,
            nombre: e.nombre,
            precio: e.precio,
          });
        }
      });
      setdataToSend(entradasAenviar);
      setfinalPrice(precio);
      console.log(precio);
      console.log(entradasAenviar);
    } else {
      return;
    }
  }, [eventsdef]);

  //Calcular precio
  useEffect(() => {
    setMasdeuna(false);
    eventsdef.forEach((e) => {
      if (e.onBuy > 0) {
        setMasdeuna(true);
      }
    });
  }, [eventsdef]);

  const handleFormSubmit = (evento) => {
    evento.preventDefault();
    // Test
    if (masdeuna) {
      setisFormValid(true);
      console.log(dataToSend);
      console.log(event.id_evento);
      axios
        .post("https://api.taquillacentral.com/preBuy", {
          entradas: dataToSend, //Necesito el captcha
          responsecaptchas: "",
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem("entradas", JSON.stringify(dataToSend));
          localStorage.setItem("id_evento", JSON.stringify(event.id_evento));
          localStorage.setItem(
            "id_sesion",
            JSON.stringify(response.data.id_sesion)
          );
          window.location.assign("/datos-del-comprador/" + event.id_evento);
          const timer = setTimeout(() => setIsChanging(false), 1000);
          clearTimeout(timer);
        })
        .catch(function (error) {
          console.log(error);
          setIsChanging(false);
          alert("Ocurrió un error");
        });
      // Reset state after sending the form
      setisFormValid(false);
    } else {
      // Show error message
      alert("Debe seleccionar al menos una entrada");
    }
  };

  return (
    <section className="ticket-list-section theme-border">
      <Container>
        <Row>
          <Col xl={8}>
            <div className="ticket-lists">
              <h4>
                <span>ENTRADAS</span>
              </h4>
              {Array.from(events).map((item, idx) => (
                <Ticket
                  key={item.id}
                  thumb={item.url_imagen_entrada}
                  event={item}
                  updateEvents={updateEvents}
                />
              ))}
            </div>
          </Col>
          <Col xl={4}>
            <div className="ticket-order-details theme-border">
              <div className='coupon-apply'>
                <h4>¿Tienes un cupón de descuento?</h4>
                <form>
                  <input type='text' placeholder='Cupon dcto. (opcional)' />
                  <input type='submit' value='Aplicar' />
                </form>
              </div>
              <div className="order-summary theme-border">
                <div className="order-summary-inner">
                  <h4>Resumen del pedido</h4>
                  <ul>
                    <li>
                      <span>Precio Total</span>
                      <span>{parseFloat(finalPrice).toFixed(2)} €</span>
                    </li>
                  </ul>
                  <div
                    style={{ cursor: "pointer" }}
                    className="solid-btn"
                    onClick={handleFormSubmit}
                  >
                    <i className="fas fa-shopping-cart"></i> Continuar
                  </div>
                </div>
              </div>

              {/*<Artists />*/}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TicketsOwn;
