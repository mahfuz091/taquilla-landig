import { Col, Container, Row, Accordion } from 'react-bootstrap'

const Terminos = () => {
  return (
    <>
      <section className='privacy-policy-section'>
        <Container>
          <Row>
            <Col xl={4} lg={4}>
              <div className='privacy-policy-accordion'>
                <Accordion defaultActiveKey='0'>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                      <i className='fa-solid fa-circle-chevron-right'></i> Términos y condiciones de venta
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          <a href='#Objeto'>Objeto</a>
                        </li>
                        <li>
                          <a href='#Compra'>Compra de entradas</a>
                        </li>
                        <li>
                          <a href='#Precio'>Precio y formas de pago</a>
                        </li>
                        <li>
                          <a href='#Política'>Política de reembolso</a>
                        </li>
                        <li>
                          <a href='#Modificación'>Modificación de los términos y condiciones</a>
                        </li>
                        <li>
                          <a href='#Legislación'>Legislación aplicable y jurisdicción</a>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
            <Col xl={8} lg={8}>
              <div className='privacy-policy-content'>
                <div className='privacy-content-item' id='Objeto'>
                  <h3>Objeto</h3>
                  <p>
                  Los presentes términos y condiciones tienen por objeto regular la venta de entradas para eventos y espectáculos a través del sitio web www.taquillacentral.com, propiedad de Taquilla Central de Ocio S.L.
                  </p>
                </div>
                <div className='privacy-content-item' id='Compra'>
                  <h3>Compra de entradas</h3>
                  <p>
                  La compra de entradas a través del sitio web implica la aceptación de los presentes términos y condiciones, así como la política de privacidad y la política de cookies del sitio web.
                  </p>
                  <p>
                  El usuario deberá seguir las instrucciones proporcionadas en el sitio web para realizar la compra de entradas. Una vez efectuada la compra, el usuario recibirá un correo electrónico de confirmación con las entradas adquiridas.
                  </p>
                </div>
                <div className='privacy-content-item' id='Base'>
                  <h3>Precio y formas de pago</h3>
                  <p>
                  El precio de las entradas será el que se indique en el sitio web en el momento de la compra. Todos los precios se indican en euros e incluyen el IVA y cualquier otro impuesto aplicable.
                  </p>
                  <p>
                  El pago se realizará a través de los medios de pago disponibles en el sitio web en el momento de la compra. Taquilla Central de Ocio S.L no se hace responsable de los problemas o errores que puedan surgir durante el proceso de pago.
                  </p>
                </div>
                <div className='privacy-content-item' id='Política'>
                  <h3>Política de reembolso</h3>
                  <p>
                  Las entradas adquiridas a través del sitio web no serán reembolsables, salvo en caso de cancelación del evento o espectáculo. En este caso, el usuario podrá solicitar el reembolso del importe de las entradas en un plazo máximo de 15 días desde la fecha del evento cancelado. Taquilla Central de Ocio S.L se reserva el derecho de solicitar la devolución de las entradas para proceder al reembolso.
                  </p>
                </div>
                <div className='privacy-content-item' id='Modificación'>
                  <h3>Modificación de los términos y condiciones</h3>
                  <p>
                  Taquilla Central de Ocio S.L se reserva el derecho de modificar los presentes términos y condiciones en cualquier momento, sin necesidad de previo aviso. Las modificaciones entrarán en vigor a partir de su publicación en el sitio web.
                  </p>
                </div>
                <div className='privacy-content-item' id='Legislación'>
                  <h3>Legislación aplicable y jurisdicción</h3>
                  <p>
                  Los presentes términos y condiciones se regirán e interpretarán de acuerdo con la legislación española. Para cualquier controversia que pudiera derivarse del acceso o uso del sitio web, las partes acuerdan someterse a los Juzgados y Tribunales de Zaragoza, renunciando a cualquier otro fuero que pudiera corresponderles.
                  </p>
                  <p>
                  En caso de cualquier duda o consulta sobre los presentes términos y condiciones, el usuario puede ponerse en contacto con Taquilla Central de Ocio S.L a través de la dirección de correo electrónico info@taquillacentral.com.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Terminos
