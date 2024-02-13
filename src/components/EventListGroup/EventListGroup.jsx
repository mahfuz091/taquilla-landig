import { useState, useEffect} from 'react'
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import Event from '../Event/Event'
import triangle from './triangle.svg'

const EventListGroup = ({event}) => {

  //Get Events
  useEffect(()=>{
    localStorage.removeItem("id_sesion");
    localStorage.removeItem("entradas");
    localStorage.removeItem("id_evento");
    localStorage.removeItem("path");
  },[]);


  return (
    <>
      <section className='eventlist-section'>
        <Container>
          {/*<Row className='section-details'>
            <Col md={8}>
              <div className='section-title'>
                <h2>Todos los eventos</h2>
              </div>
  </Col>
          </Row>*/}
          <Row className='g-4'>
            {Array.from(event)
                .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
                .map((item, idx) => (
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
                        grupo={0}
                    />
                ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default EventListGroup
