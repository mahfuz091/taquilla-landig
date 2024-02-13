import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Artists from "../Artists/Artists";

import axios from "axios";
import { useTimer } from "react-timer-hook";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import DatePicker from "react-datepicker";
import Link from "next/link";
registerLocale("es", es);

function MyTimer({ expiryTimestamp, id_evento }) {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () =>
      axios
        .get("https://api.taquillacentral.com/logout")
        .then((response) => {
          console.log(response);
          window.location.assign("/entradas/" + id_evento);
        })
        .catch(function (error) {
          console.log(error);
          window.location.assign("/entradas/" + id_evento);
        }),
  });

  return (
    <div className="customer-info" id="customer-info" name="customer-info">
      <h3>Datos del comprador</h3>
      <p className="remaining-time">
        Tiempo restante: {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </p>
    </div>
  );
}

const CustomerDetails = () => {
  const [checked, setIsChecked] = useState(true);
  const [id_sesion, setIdsesion] = useState("");
  const [id_evento, setID] = useState("");
  const [id_referido, setIdReferido] = useState("");
  const [ent, setEntradas] = useState([]);

  const [errornombre, setErrornombre] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [errorMail2, setErrorMail2] = useState(false);
  const [errordni, setErrorDni] = useState(false);
  const [errorcp, setErrorcp] = useState(false);
  const [errorTelefono, setErrorTelefono] = useState(false);
  const [nombre, setnombre] = useState("");
  const [mail, setMail] = useState("");
  const [mail2, setMail2] = useState("");
  const [dni, setDni] = useState("");
  const [cp, setcp] = useState("12345");
  const [telefono, setTelefono] = useState("");
  const [gender, setGender] = useState("");
  const [events, setEvents] = useState([]);
  var [price, setPrice] = useState(0);
  var [priceSms, setPriceSms] = useState(0);
  const [iframeUrl, setIframeUrl] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);

  const emailRegEx = /^\S+@\S+\.\S+$/;

  //Coger entradas
  useEffect(() => {
    if (id_evento !== undefined && id_evento !== "") {
      fetch("https://api.taquillacentral.com/events/" + id_evento)
        .then((result) => {
          if (result.ok) {
            return result.json();
          }
          throw new Error("Error");
        })
        .then((res) => {
          res.forEach((node) => (node.onBuy = 0));
          setEvents(res);
          console.log(res);
        })
        .catch((res) => {
          alert(res);
        });
    }
  }, []);

  useEffect(() => {
    const entradas = JSON.parse(localStorage.getItem("entradas"));
    setEntradas(entradas);
    //console.log(ent)
    const id_evento = JSON.parse(localStorage.getItem("id_evento"));
    setID(id_evento);
    const id_ses = JSON.parse(localStorage.getItem("id_sesion"));
    setIdsesion(id_ses);
    const id_ref = localStorage.getItem('refID');
    setIdReferido(id_ref);
    console.log("El id referido es"+id_ref);
    if (id_ses === null) {
      window.location.assign("/");
    }
  }, []);

  useEffect(() => {
    if (ent) {
      var precio = 0.0;
      var precioSms = 0;
      ent.forEach((e) => {
        precio += e.cantidad * (parseFloat(e.precio) + 0.5);
        precioSms += e.cantidad * 0.5;
      });
      setPriceSms(precioSms);
      setPrice(precio);
    } else {
      return;
    }
  }, [ent]);

  /*useEffect(()=>{
    if (ent){
      var precio_sms = 0.00;
      ent.forEach(e => {
          precio_sms += e.cantidad * 0.1;
      });
      setPriceSms(precio_sms);
    }else{
      return
    }
  },[ent])

  useEffect(()=>{
    if (ent){
      var precio = 0.00;
      ent.forEach(e => {
          precio += e.cantidad * parseFloat(e.precio);
      });
      setPrice(precio);
    }else{
      return
    }
    if(checked){
      setPrice(precio+priceSms)
    }else{
      setPrice(precio)
    }
  },[checked])*/

  function doSomethingFunc() {
    var data = new FormData();
    console.log(nombre);
    data.append("nombre", nombre);
    console.log(mail);
    data.append("email", mail);
    console.log(dni);
    data.append("dni", dni);
    console.log(id_sesion);
    data.append("id_sesion", id_sesion);
    console.log(cp);
    data.append("codigopostal", cp);
    console.log(telefono);
    data.append("telefono", telefono);
    data.append(
      "fecha_nacimiento",
      new Date(selectedDate).toISOString().substring(0, 10)
    );
    data.append("genero", gender);
    data.append("sms", checked ? "si" : "no");
    data.append("referido",id_referido);
    console.log(data);
    if (isCheckedTerms) {
      if (
        errorMail2 ||
        errorMail ||
        nombre === "" ||
        mail === "" ||
        mail === undefined ||
        errorTelefono ||
        telefono === "" ||
        mail2 === "" ||
        mail2 === undefined ||
        mail2 !== mail ||
        errorcp ||
        errordni ||
        cp === "" ||
        dni === ""
      ) {
        alert("Debe rellenar los campos correctamente.");
      } else {
        axios
          .post("https://api.taquillacentral.com/buy", data)
          .then((result) => {
            console.log(result.data);
            window.location.assign(result.data.URL_REDIRECT);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    } else {
      alert("Debe aceptar los términos y condiciones.");
    }
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  const handleCheckSms = (e) => {
    var precio = 0;
    var precioSms = 0;

    setIsChecked(e.target.checked);

    if (e.target.checked) {
      ent.forEach((e) => {
        precio += e.cantidad * (parseFloat(e.precio) + 0.5);
        precioSms += e.cantidad * 0.5;
      });
    } else {
      ent.forEach((e) => {
        precio += e.cantidad * parseFloat(e.precio);
      });
    }
    setPriceSms(precioSms);
    setPrice(precio);
  };

  function validaDNI(dni) {
    return dni.length > 2;
  }

  const onChangenombre = (e) => {
    setnombre(e.target.value);
    if (e.target.value === "") {
      setErrornombre(true);
    } else {
      setErrornombre(false);
    }
  };

  const onChangeMail = (e) => {
    setMail(e.target.value);
    if (!emailRegEx.test(e.target.value) || e.target.value === "") {
      setErrorMail(true);
    } else {
      setErrorMail(false);
    }
  };

  const onChangeMail2 = (e) => {
    setMail2(e.target.value);
    if (e.target.value !== mail) {
      setErrorMail2(true);
    } else {
      setErrorMail2(false);
    }
  };

  const onChangeDni = (e) => {
    setDni(e.target.value);
    if (e.target.value === "" || validaDNI(e.target.value) === false) {
      setErrorDni(true);
    } else {
      setErrorDni(false);
    }
  };

  const onChangeCp = (e) => {
    setcp(e.target.value);
    if (e.target.value === "") {
      setErrorcp(true);
    } else {
      if (e.target.value.length !== 5 || isNaN(Number(e.target.value))) {
        setErrorcp(true);
      } else {
        setErrorcp(false);
      }
    }
  };

  const onChangeTelefono = (e) => {
    setTelefono(e.target.value);
    if (e.target.value === "") {
      setErrorTelefono(true);
    } else {
      if (e.target.value.length !== 9 || isNaN(Number(e.target.value))) {
        setErrorTelefono(true);
      } else {
        setErrorTelefono(false);
      }
    }
  };

  const handleClose2 = () => {
    axios
      .get("https://api.taquillacentral.com/logout")
      .then((response) => {
        console.log(response);
        window.location.assign("/");
      })
      .catch(function (error) {
        console.log(error);
        window.location.assign("/");
      });
  };

  const handleChangeTerms = (event) => {
    setIsCheckedTerms(event.target.checked);
  };

  return (
    <section className="customer-details-section">
      <Container>
        <Row>
          <Col xl={8}>
            <div className="customer-details-form-wrapper">
              <MyTimer expiryTimestamp={time} id_evento={id_evento} />
              <div className="customer-details-form">
                <form>
                  <Row>
                    <Col xl={12}>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Nombre*"
                          onChange={onChangenombre}
                          style={{
                            border: errornombre ? "2px solid red" : "none",
                          }}
                        />
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Correo*"
                          onChange={onChangeMail}
                          style={{
                            border: errorMail ? "2px solid red" : "none",
                          }}
                        />
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Confirmar correo*"
                          onChange={onChangeMail2}
                          style={{
                            border: errorMail2 ? "2px solid red" : "none",
                          }}
                        />
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="DNI / Pasaporte / ID*"
                          onChange={onChangeDni}
                          style={{
                            border: errordni ? "2px solid red" : "none",
                          }}
                        />
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className="form-group">
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                          placeholderText="Fecha de Nacimiento"
                          locale="es"
                        />
                      </div>
                    </Col>
                    <Col xl={12}>
                      <div className="form-group">
                        <input
                          type="tel"
                          placeholder="Teléfono*"
                          onChange={onChangeTelefono}
                          style={{
                            border: errorTelefono ? "2px solid red" : "none",
                          }}
                        />
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Código Postal"
                          onChange={onChangeCp}
                          style={{ border: errorcp ? "2px solid red" : "none" }}
                        />
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className="form-group gender-choose">
                        <div className=" d-flex align-items-center">
                          <h5>Género</h5>
                          <span>
                            <input
                              type="radio"
                              name="gender"
                              value="Hombre"
                              checked={gender === "Hombre"}
                              onChange={(e) => setGender(e.target.value)}
                            />
                            Hombre
                          </span>
                          <span>
                            <input
                              type="radio"
                              name="gender"
                              value="Mujer"
                              checked={gender === "Mujer"}
                              onChange={(e) => setGender(e.target.value)}
                            />
                            Mujer
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col xl={12}>
                      <div className="form-group gender-choose">
                        <div className="checkboxes">
                          <p className="checkbox-custom">
                            <input
                              onChange={handleCheckSms}
                              checked={checked}
                              type="checkbox"
                              className="me-2"
                            />
                            <label htmlFor="">
                              Envío por SMS (+0.50€ por entrada)
                            </label>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
              <div className="order-summary-customer">
                <h4>Resumen del pedido</h4>
                <ul>
                  <li>
                    <span>Precio</span>
                    <span>{parseFloat(price - priceSms).toFixed(2)} €</span>
                  </li>
                  <li>
                    <span>Envío adicional por SMS</span>
                    <span>
                      {checked ? parseFloat(priceSms).toFixed(2) : 0}€
                    </span>
                  </li>
                  {/*<li>
                    <span>Discount 10%</span>
                    <span className='red-text'>-€125.00</span>
                  </li>*/}
                  <li>
                    <span>Precio Total</span>
                    <span>{parseFloat(price).toFixed(2)} €</span>
                  </li>
                </ul>
              </div>
              <div className="terms-conditions">
                <div className="checkboxes">
                  <p className="checkbox-custom">
                    <input type="checkbox" />
                    <label htmlFor="">
                      Consiento que mis datos sean tratados con finalidades
                      publicitarias y de prospección comercial
                    </label>
                  </p>
                  <p className="checkbox-custom">
                    <input
                      type="checkbox"
                      checked={isCheckedTerms}
                      onChange={handleChangeTerms}
                    />{" "}
                    <label htmlFor="">
                      He leído y acepto los{" "}
                      <a
                        href="https://www.taquillacentral.com/terminos-y-condiciones"
                        target="_blank"
                      >
                        términos y condiciones
                      </a>{" "}
                      y la{" "}
                      <a
                        href="https://www.taquillacentral.com/politica-privacidad"
                        target="_blank"
                      >
                        política de privacidad
                      </a>{" "}
                      de Taquilla Central
                    </label>
                  </p>
                </div>
                <div className="confirm-buttons">
                  <button className="cancel-button" onClick={handleClose2}>
                    Cancelar pedido
                  </button>
                  <div
                    style={{
                      cursor: "pointer",
                      width: "325px",
                      marginTop: "0",
                    }}
                    className="solid-btn"
                    onClick={doSomethingFunc}
                  >
                    <i className="fas fa-shopping-cart"></i> Continuar
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4}>{/*<Artists />*/}</Col>
        </Row>
      </Container>
    </section>
  );
};

export default CustomerDetails;
