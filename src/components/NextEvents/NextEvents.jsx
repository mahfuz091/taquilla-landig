import { Col, Container, Row } from 'react-bootstrap'
import { useState, useEffect} from 'react'
import Event from '../Event/Event'

const NextEvents = () => {
  const [events, setevents] = useState ([]);
  
  //Get Events
  useEffect(()=>{
    fetch('https://taquillacentral.com/api/recent_events')
      .then(result => {
        if (result.ok) {
          return result.json();
        }
        throw new Error('No hay entradas disponibles');      
      })
      .then((res) => {
        res.forEach((node) => node.onBuy = 0);
        res.sort((a, b) => ((new Date(a.apertura_puertas)) > (new Date(b.apertura_puertas))) ? 1 : -1);
        setevents(res);
        })
      .catch(res => {})
  },[]);
  return (
    <section className='eventlist-section next-events'>
      <Container>
        <Row className='section-details'>
          <Col md={8}>
            <div className='section-title'>
              <h2>Próximos Eventos</h2>
            </div>
          </Col>
        </Row>
        <Row className='g-4'>
        {Array.from(events).map((item, idx) => (
        <Event column='3' key={item.id} nombre={item.nombre_evento} fecha={item.fecha} precio={item.min_precio} url_imagen={item.url_imagen} id_evento={item.id} lugar={item.lugar} venta_externa={item.venta_externa} grupo={item.grupo}/>))}
        </Row>
      </Container>
    </section>
  )
}

export default NextEvents
