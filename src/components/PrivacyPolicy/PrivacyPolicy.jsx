import { Col, Container, Row, Accordion } from 'react-bootstrap'

const PrivacyPolicy = () => {
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
                      <i className='fa-solid fa-circle-chevron-right'></i> Política de privacidad
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          <a href='#Responsable'>Responsable del tratamiento</a>
                        </li>
                        <li>
                          <a href='#Información'>Información que recopilamos</a>
                        </li>
                        <li>
                          <a href='#Base'>Base jurídica del tratamiento</a>
                        </li>
                        <li>
                          <a href='#Uso'>Uso de la información</a>
                        </li>
                        <li>
                          <a href='#Compartir'>Compartir información</a>
                        </li>
                        <li>
                          <a href='#Transferencias'>Transferencias internacionales de datos</a>
                        </li>
                        <li>
                          <a href='#Derechos'>Derechos de los usuarios</a>
                        </li>
                        <li>
                          <a href='#Conservación'>Conservación de datos</a>
                        </li>
                        <li>
                          <a href='#Cambios'>Cambios en esta política de privacidad</a>
                        </li>
                        <li>
                          <a href='#Seguridad'>Seguridad de la información</a>
                        </li>
                        <li>
                          <a href='#Menores'>Menores de edad</a>
                        </li>
                        <li>
                          <a href='#Cookies'>Cookies</a>
                        </li>
                        <li>
                          <a href='#Ley'>Ley aplicable y jurisdicción</a>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
            <Col xl={8} lg={8}>
              <div className='privacy-policy-content'>
                <div className='privacy-content-item' id='Responsable'>
                  <h3>Responsable del tratamiento</h3>
                  <p>
                  El responsable del tratamiento de tus datos personales es Taquilla Central de Ocio S.L, con domicilio social en Paseo Independencia. 24-26, Local 25, 50004, Zaragoza, España. y NIF B44961803. Puedes ponerte en contacto con nosotros en cualquier momento a través de nuestro sitio web o por correo electrónico a info@taquillacentral.com.
                  </p>
                </div>
                <div className='privacy-content-item' id='Información'>
                  <h3>Información que recopilamos</h3>
                  <p>
                  Recopilamos información que nos proporcionas directamente, como tu nombre, dirección de correo electrónico y otra información de contacto cuando te registras en nuestro sitio web o haces una compra. También podemos recopilar información de uso del sitio, como la fecha y hora de tu visita, el navegador que utilizas y las páginas que visitas.
                  </p>
                </div>
                <div className='privacy-content-item' id='Base'>
                  <h3>Base jurídica del tratamiento</h3>
                  <p>
                  El tratamiento de tus datos personales se basa en el consentimiento que nos has proporcionado al registrarte en nuestro sitio web o realizar una compra.
                  </p>
                </div>
                <div className='privacy-content-item' id='Uso'>
                  <h3>Uso de la información</h3>
                  <p>
                  Utilizamos la información que recopilamos para proporcionarte los servicios que ofrecemos en nuestro sitio web, como procesar tus pedidos y enviar confirmaciones de compra. También podemos utilizar la información para mejorar nuestro sitio web y personalizar tu experiencia de usuario.
                  </p>
                </div>
                <div className='privacy-content-item' id='Compartir'>
                  <h3>Compartir información</h3>
                  <p>
                  No compartimos tu información personal con terceros, salvo que sea necesario para proporcionarte los servicios que ofrecemos en nuestro sitio web, como procesar tus pagos o enviar correos electrónicos de confirmación de compra. En caso de que sea necesario compartir tus datos personales con terceros, nos aseguraremos de que cumplan con los estándares de protección de datos requeridos por la ley.
                  </p>
                </div>
                <div className='privacy-content-item' id='Transferencias'>
                  <h3>Transferencias internacionales de datos</h3>
                  <p>
                  Si utilizamos servicios de terceros que están ubicados fuera de la Unión Europea, nos aseguraremos de que se implementen medidas de seguridad adecuadas para proteger tus datos personales, como cláusulas contractuales estándar.
                  </p>
                </div>
                <div className='privacy-content-item' id='Derechos'>
                  <h3>Derechos de los usuarios</h3>
                  <p>
                  Tienes derecho a acceder a la información personal que tenemos sobre ti, así como a solicitar que se corrijan, actualicen o eliminen tus datos personales. También puedes solicitar que dejemos de enviarte correos electrónicos promocionales en cualquier momento. Para ejercer tus derechos, por favor ponte en contacto con nosotros a través de nuestro sitio web o por correo electrónico a info@taquillacentral.com.
                  </p>
                </div>
                <div className='privacy-content-item' id='Conservación'>
                  <h3>Conservación de datos</h3>
                  <p>
                  Conservaremos tus datos personales durante el tiempo que sea necesario para proporcionarte los servicios que ofrecemos en nuestro sitio web y para cumplir con nuestras obligaciones legales. Si deseas que eliminemos tus datos personales, ponte en contacto con nosotros a través de nuestro sitio web o por correo electrónico a info@taquillacentral.com.
                  </p>
                </div>
                <div className='privacy-content-item' id='Cambios'>
                  <h3>Cambios en esta política de privacidad</h3>
                  <p>
                  Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Si realizamos cambios significativos, te informaremos a través de nuestro sitio web o por correo electrónico. Te recomendamos que revises esta política de privacidad regularmente para estar al tanto de cualquier cambio.
                  </p>
                </div>
                <div className='privacy-content-item' id='Seguridad'>
                  <h3>Seguridad de la información</h3>
                  <p>
                  Tomamos medidas de seguridad técnicas y organizativas adecuadas para proteger tus datos personales contra el acceso no autorizado, la divulgación, la alteración o la destrucción. Sin embargo, ten en cuenta que ninguna transmisión de datos por Internet o cualquier red inalámbrica puede garantizar una seguridad completa.
                  </p>
                </div>
                <div className='privacy-content-item' id='Menores'>
                  <h3>Menores de edad</h3>
                  <p>
                  Nuestro sitio web no está dirigido a menores de 16 años y no recopilamos conscientemente información de menores de edad. Si descubrimos que hemos recopilado información de un menor de edad sin el consentimiento de sus padres o tutores legales, eliminaremos dicha información de inmediato.
                  </p>
                </div>
                <div className='privacy-content-item' id='Cookies'>
                  <h3>Cookies</h3>
                  <p>
                  Utilizamos cookies y tecnologías similares en nuestro sitio web para mejorar tu experiencia de usuario y personalizar el contenido y la publicidad. Puedes configurar tu navegador para que te avise cuando se envía una cookie o para rechazar todas las cookies. Sin embargo, ten en cuenta que algunas funciones de nuestro sitio web pueden no funcionar correctamente si desactivas las cookies.
                  </p>
                </div>
                <div className='privacy-content-item' id='Ley'>
                  <h3>Ley aplicable y jurisdicción</h3>
                  <p>
                  Esta política de privacidad se rige por la ley española y cualquier disputa relacionada con esta política de privacidad se someterá a los tribunales de la ciudad de Zaragoza, España.
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

export default PrivacyPolicy
