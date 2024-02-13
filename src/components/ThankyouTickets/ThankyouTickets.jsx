import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import thumb from './thumb.png'
import Link from 'next/link'

const ThankyouTickets = ({events}) => {
  const MAX_LENGTH = 40;
  const handleClick = (parametro) => {
    window.open('https://api.taquillacentral.com/DescargarPDF/descargar_pdf.php?codigo='+ parametro);
  }
  return (
    <div className='thank-you-tickets'>
    {Array.from(events).map((item, idx) => (
      <div className='thank-you-ticket-item' key={item.id}>
        <div className='thank-you-ticket-wrapper d-flex align-items-center'>
          <div className='thank-you-ticket-thumb' style={{ width: '110px', height: '110px', overflow: 'hidden' }}>
            <img src={item.url_imagen} alt='' style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '10px', aspectRatio: '1 / 1', }}/>
          </div>
          <div className='thank-you-ticket-content ms-4'>
            <h4>{item.nombre_entrada.length > MAX_LENGTH
  ? item.nombre_entrada.slice(0, MAX_LENGTH) + '...' : item.nombre_entrada}</h4>
            <p>{item.descripcion.length > MAX_LENGTH
  ? item.descripcion.slice(0, MAX_LENGTH) + '...' : item.descripcion}</p>
            <span className='ticket-id'>
              Código: #<strong>{item.cod_entrada}</strong>
            </span>
          </div>
        </div>
        <div className='thank-you-ticket-price text-end'>
          <p className='ticket-price'>
            Precio: {parseFloat(item.precio).toFixed(2)}€ <span>+ {parseFloat(item.comision).toFixed(2)}€ g.d.g.</span>
    </p>
          <button className='primary-btn' onClick={() => handleClick(item.codigo_qr)}>
          Descargar<i className='fas fa-download'></i>
        </button>
        </div>
      </div>))}
      <div className='thank-you-ticket-bottom'>
        <Row className='d-flex justify-content-between align-items-center'>
          <Col xl={5} lg={6}>
            <p>Descubre más eventos en Taquilla Central</p>
          </Col>
          <Col xl={5} lg={6} className='text-end'>
            <div className='button-wrapper'>
              <Link href='/' className='bordered-btn'>
                Continuar comprando <i className='fas fa-arrow-right ms-2'></i>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ThankyouTickets
