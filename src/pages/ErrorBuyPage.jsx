import ErrorMessage from '../components/ErrorMessage/ErrorMessage'
import {Helmet} from "react-helmet";
import React from "react";




const ErrorBuyPage = () => {
  return (
    <>
        <Helmet>
            <title>Error en la compra</title>
            <meta name="description" content=""  />
            <meta property="og:locale" content="es_ES"/>
            {/* Otras etiquetas <meta> específicas de la página de inicio */}
        </Helmet>
      <ErrorMessage />
    </>
  )
}

export default ErrorBuyPage
