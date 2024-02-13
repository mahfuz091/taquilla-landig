import { Col, Container, Row, Accordion } from 'react-bootstrap'

const PoliticaCookies = () => {
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
                      <i className='fa-solid fa-circle-chevron-right'></i> Política de Cookies
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          <a href='#¿Qué son'>¿Qué son las cookies?</a>
                        </li>
                        <li>
                          <a href='#¿Qué tipos'>¿Qué tipos de cookies utiliza este sitio web?</a>
                        </li>
                        <li>
                          <a href='#¿Cómo puedo'>¿Cómo puedo configurar las cookies?</a>
                        </li>
                        <li>
                          <a href='#¿Cómo puedo obtener'>¿Cómo puedo obtener más información?</a>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
            <Col xl={8} lg={8}>
              <div className='privacy-policy-content'>
                <div className='privacy-content-item' id='¿Qué son'>
                  <h3>¿Qué son las cookies?</h3>
                  <p>
                  Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando se accede a una página web. Estos archivos permiten a la página web recordar cierta información sobre el usuario, como sus preferencias de navegación o el idioma seleccionado, lo que permite personalizar la experiencia de usuario y hacerla más cómoda y eficiente.
                  </p>
                </div>
                <div className='privacy-content-item' id='¿Qué tipos'>
                  <h3>¿Qué tipos de cookies utiliza este sitio web?</h3>
                  <p>
                  Este sitio web utiliza los siguientes tipos de cookies:
                  </p>
                  <p>
                  - Cookies técnicas: son aquellas necesarias para el correcto funcionamiento del sitio web. Permiten al usuario navegar por el sitio web y utilizar sus funciones, como acceder a áreas seguras o realizar compras en línea. Estas cookies no recopilan información personal del usuario.
                  </p>
                  <p>
                  - Cookies de análisis: son aquellas que permiten el análisis estadístico de la actividad de los usuarios en el sitio web. Se utilizan para mejorar la oferta de productos y servicios y para medir el rendimiento del sitio web. Estas cookies pueden ser de terceros y recopilar información anónima sobre la actividad del usuario en el sitio web.
                  </p>
                  <p>
                  - Cookies de publicidad: son aquellas que permiten la gestión de los espacios publicitarios del sitio web en base a criterios como la frecuencia de visualización de los anuncios. Estas cookies pueden ser de terceros y recopilar información sobre los hábitos de navegación del usuario para mostrarle publicidad personalizada.
                  </p>
                </div>
                <div className='privacy-content-item' id='¿Cómo puedo'>
                  <h3>¿Cómo puedo configurar las cookies?</h3>
                  <p>
                  El usuario puede configurar su navegador para que acepte o rechace todas las cookies, o para que le avise cada vez que se envía una cookie al dispositivo. Para modificar la configuración de las cookies, el usuario debe seguir las instrucciones proporcionadas por su navegador. Sin embargo, es importante tener en cuenta que el bloqueo de cookies puede afectar negativamente a la experiencia de usuario y a la funcionalidad del sitio web.
                  </p>
                </div>
                <div className='privacy-content-item' id='¿Cómo puedo obtener'>
                  <h3>¿Cómo puedo obtener más información?</h3>
                  <p>
                  Si el usuario desea obtener más información sobre las cookies utilizadas en este sitio web, puede ponerse en contacto con Taquilla Central de Ocio S.L a través de la dirección de correo electrónico info@taquillacentral.com.
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

export default PoliticaCookies
