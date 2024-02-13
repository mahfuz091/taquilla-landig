import { Col, Container, Row, Accordion } from "react-bootstrap";

const AvisoLegal = () => {
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
                      <i className='fa-solid fa-circle-chevron-right'></i> Aviso
                      Legal
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          <a href='#Titularidad'>Titularidad del sitio web</a>
                        </li>
                        <li>
                          <a href='#Contenido'>Contenido y uso del sitio web</a>
                        </li>
                        <li>
                          <a href='#Propiedad'>
                            Propiedad intelectual e industrial
                          </a>
                        </li>
                        <li>
                          <a href='#Política'>Política de enlaces</a>
                        </li>
                        <li>
                          <a href='#Protección'>
                            Protección de datos personales
                          </a>
                        </li>
                        <li>
                          <a href='#Exclusión'>Exclusión de responsabilidad</a>
                        </li>
                        <li>
                          <a href='#Legislación'>
                            Legislación y jurisdicción aplicable
                          </a>
                        </li>
                        <li>
                          <a href='#Contacto'>Contacto</a>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
            <Col xl={8} lg={8}>
              <div className='privacy-policy-content'>
                <div className='privacy-content-item' id='Titularidad'>
                  <h3>Titularidad del sitio web</h3>
                  <p>
                    En cumplimiento de lo dispuesto en el artículo 10 de la Ley
                    34/2002, de 11 de julio, de Servicios de la Sociedad de la
                    Información y del Comercio Electrónico, se informa que el
                    sitio web www.taquillacentral.com (en adelante, el
                    &quot;Sitio Web&quot;) es propiedad de Taquilla Central de
                    Ocio S.L (en adelante, &quot;la Empresa&quot;), con CIF
                    B44961803, y con domicilio social en Paseo Independencia.
                    24-26, Local 25, 50004, Zaragoza, España, inscrita en el
                    Registro Mercantil de Zaragoza en el Tomo 4654 del Libro 0,
                    Folio 158, Seccion 8,Hoja Z 71689.
                  </p>
                </div>
                <div className='privacy-content-item' id='Contenido'>
                  <h3>Contenido y uso del sitio web</h3>
                  <p>
                    El acceso y uso del Sitio Web atribuye la condición de
                    usuario (en adelante, el &quot;Usuario&quot;) e implica la
                    aceptación plena y sin reservas por parte del Usuario de
                    todas las condiciones incluidas en este Aviso Legal. El
                    Usuario se compromete a utilizar el Sitio Web de conformidad
                    con la ley y el presente Aviso Legal, así como con la moral
                    y las buenas costumbres generalmente aceptadas y el orden
                    público.
                  </p>
                  <p>
                    La Empresa se reserva el derecho a modificar en cualquier
                    momento y sin necesidad de previo aviso la presentación y
                    configuración del Sitio Web, así como los contenidos y
                    servicios que en él se incorporan. El Usuario reconoce y
                    acepta que la Empresa podrá interrumpir, desactivar y/o
                    cancelar cualquier contenido o servicio del Sitio Web en
                    cualquier momento.
                  </p>
                </div>
                <div className='privacy-content-item' id='Propiedad'>
                  <h3>Propiedad intelectual e industrial</h3>
                  <p>
                    Todos los derechos de propiedad intelectual e industrial
                    sobre el Sitio Web, así como sobre los contenidos y
                    servicios que en él se incorporan, pertenecen a la Empresa o
                    a terceros, salvo que se indique lo contrario. En ningún
                    caso se entenderá que el acceso y uso del Sitio Web y/o de
                    los contenidos y servicios que en él se incorporan implica
                    renuncia, transmisión, licencia o cesión total ni parcial de
                    dichos derechos por parte de la Empresa o, en su caso, de
                    los titulares legítimos de los mismos.
                  </p>
                  <p>
                    Queda expresamente prohibido el uso no autorizado del Sitio
                    Web o de cualquiera de sus contenidos y servicios, así como
                    la reproducción, distribución, comunicación pública,
                    transformación, modificación, y/o cualquier otra actividad
                    similar o análoga, sin la previa autorización expresa de la
                    Empresa o, en su caso, de los titulares legítimos.
                  </p>
                </div>
                <div className='privacy-content-item' id='Política'>
                  <h3>Política de enlaces</h3>
                  <p>
                    El Sitio Web puede incluir enlaces a otros sitios web o
                    recursos de terceros. La Empresa no tiene ningún control
                    sobre dichos sitios o recursos externos y, por tanto, no se
                    hace responsable de los contenidos, servicios, productos u
                    otros materiales disponibles en dichos sitios o recursos
                    externos. El Usuario reconoce y acepta que la Empresa no
                    será responsable por cualquier daño o pérdida causados por o
                    en conexión con el uso de los contenidos, servicios,
                    productos u otros materiales disponibles en dichos sitios o
                    recursos externos.
                  </p>
                </div>
                <div className='privacy-content-item' id='Protección'>
                  <h3>Protección de datos personales</h3>
                  <p>
                    La Empresa cumple con la normativa en materia de protección
                    de datos personales y garantiza la privacidad de los
                    Usuarios que utilizan el Sitio Web. Para más información
                    sobre cómo se tratan los datos personales, por favor,
                    consulte nuestra Política de Privacidad [hipervínculo a la
                    Política de Privacidad].
                  </p>
                </div>
                <div className='privacy-content-item' id='Exclusión'>
                  <h3>Exclusión de responsabilidad</h3>
                  <p>
                    La Empresa no garantiza la disponibilidad y continuidad del
                    funcionamiento del Sitio Web. La Empresa no será responsable
                    por los daños y perjuicios de cualquier naturaleza que
                    puedan derivarse de la falta de disponibilidad o continuidad
                    del funcionamiento del Sitio Web o de los contenidos y
                    servicios que en él se incorporan.
                  </p>
                  <p>
                    La Empresa no será responsable de los contenidos, servicios,
                    productos u otros materiales disponibles en los sitios web o
                    recursos externos que se enlacen desde el Sitio Web. La
                    Empresa no será responsable de los daños y perjuicios de
                    cualquier naturaleza que puedan derivarse del acceso, uso o
                    mala utilización del Sitio Web, ni de los contenidos y
                    servicios que en él se incorporan.
                  </p>
                </div>
                <div className='privacy-content-item' id='Legislación'>
                  <h3>Legislación y jurisdicción aplicable</h3>
                  <p>
                    El presente Aviso Legal se regirá e interpretará de acuerdo
                    con la legislación española. Para cualquier controversia que
                    pudiera derivarse del acceso o uso del Sitio Web, las partes
                    acuerdan someterse a los Juzgados y Tribunales de Zaragoza,
                    renunciando a cualquier otro fuero que pudiera
                    corresponderles.
                  </p>
                </div>
                <div className='privacy-content-item' id='Contacto'>
                  <h3>Contacto</h3>
                  <p>
                    En caso de cualquier duda o consulta sobre el presente Aviso
                    Legal, el Usuario puede ponerse en contacto con la Empresa a
                    través de la dirección de correo electrónico
                    info@taquillacentral.com.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AvisoLegal;
