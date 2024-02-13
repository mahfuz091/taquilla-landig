import { Container, Row, Col } from 'react-bootstrap'
import Check from './check.svg'

const ThankYouMessage = () => {
  return (
    <section className='thank-you-section'>
      <Container>
        <Row className='justify-content-center'>
          <Col xl={8} className='text-center'>
            <div className='thank-you-content'>
              <img src={Check.src} alt='' />
              <h1>Gracias por su compra</h1>
              <p>Se han enviado las entradas y el recibo de su compra a la cuenta de correo electrónico proporcionada</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ThankYouMessage
