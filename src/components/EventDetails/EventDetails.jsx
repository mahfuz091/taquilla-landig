import { Container, Row, Col } from 'react-bootstrap'
import Calendar from './calendar.svg'
import Map from './map.svg'
import { Typography } from "@mui/material";

const optionsDate = { day: 'numeric', month: 'long'};
const optionsHour = {
  hour: '2-digit',
  minute:'2-digit'
};


const EventDetails = ({ event }) => {
  return (
    <section className='event-details-section'>
      <Container>
        <Row className='align-items-center'>
          <Col xl={6}>
            <div className='event-details'>
              <img src={event.url_imagen_evento} alt={`Venta de entradas ${event.nombre_evento} en ${event.lugar} - ${event.ciudad}`} className='event-details-thumb img-fluid' style={{objectFit: 'cover', borderRadius: '10px', aspectRatio: '1.17 / 1'}}/>
              <div className='event-details-info'>
                <p>
                  <img src={Calendar.src} alt='' />Desde el {(new Date (event.apertura_puertas)).toLocaleDateString("es-ES", optionsDate)+ " "} a las {(new Date (event.apertura_puertas)).toLocaleTimeString("es-ES", optionsHour)} hasta el {(new Date (event.cierre_puertas)).toLocaleDateString("es-ES", optionsDate)} a las {" "+(new Date (event.cierre_puertas)).toLocaleTimeString("es-ES", optionsHour)}
                </p>
                <p>
                  <img src={Map.src} alt='' /> {event.lugar + ", " + event.ciudad + ", España"}
                </p>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className='event-details-content'>
              <h2>{event.nombre_evento}</h2>
              <Typography component="div" style={{whiteSpace: 'pre-line'}}>
                {event.desc_evento} 
              </Typography>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default EventDetails
