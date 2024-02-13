import { Container, Row, Col } from 'react-bootstrap'
import Calendar from './calendar.svg'
import Map from './map.svg'
import { Typography } from "@mui/material";

const optionsDate = { day: 'numeric', month: 'long'};
const optionsHour = {
  hour: '2-digit',
  minute:'2-digit'
};


const EventDetailsGroup = ({ event }) => {
  return (
    <section className='event-details-section'>
      <Container>
        <Row className='align-items-center'>
          <Col xl={6}>
            <div className='event-details'>
              <img src={event.url_imagen} alt='' className='event-details-thumb img-fluid' style={{borderRadius: '10px'}}/>
              <div className='event-details-info'>
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

export default EventDetailsGroup
