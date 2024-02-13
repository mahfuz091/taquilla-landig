"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

const TypeAhead = ({ events, handleClose = false }) => {
  const typeaheadRef = useRef(null);
  const [busqueda, setBusqueda] = useState("");
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const navigate = router.push;
  function handleChange(selected) {
    if (selected.length > 0) {
      setBusqueda(selected[0]);
      redirectToPage(selected[0]); // Almacena la URL de redirección en una variable local
    } else {
      setBusqueda("");
    }
  }
  const handleInputChange = (input) => {
    setInputValue(input);
  };

  function redirectToPage(selectedItem) {
    let redirectUrl = "";

    if (
      selectedItem.venta_externa !== null &&
      selectedItem.venta_externa !== ""
    ) {
      redirectUrl =
        "/espaciozity/" +
        selectedItem.nombre_evento
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/-/g, " ")
          .replace(/\s+/g, "-") +
        "-" +
        selectedItem.id;
    } else if (selectedItem.grupo === 1) {
      redirectUrl =
        "/grupo-eventos/" +
        selectedItem.nombre_evento
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/-/g, " ")
          .replace(/\s+/g, "-") +
        "-" +
        selectedItem.id;
    } else {
      redirectUrl =
        "/entradas/" +
        selectedItem.nombre_evento
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/-/g, " ")
          .replace(/\s+/g, "-") +
        "-" +
        selectedItem.id;
    }

    navigate(redirectUrl); // Realiza la redirección interna de React

    if (typeaheadRef.current) {
      typeaheadRef.current.clear();
      if (typeof handleClose === "function") {
        handleClose();
      }
    }
  }
  return (
    <Typeahead
      id='buscador-suggest'
      labelKey='nombre_evento'
      options={events}
      maxResults={4}
      paginationText='Mostrar más resultados...'
      placeholder='Concierto, evento, ...'
      onChange={handleChange}
      onInputChange={handleInputChange}
      ref={typeaheadRef}
    />
  );
};

export default TypeAhead;
