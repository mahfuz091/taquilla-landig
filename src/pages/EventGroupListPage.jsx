"use client";
import EventDetailsGroup from "../components/EventDetailsGroup/EventDetailsGroup";
import NextEvents from "../components/NextEvents/NextEvents";
import PageBannerGroup from "../components/PageBannerGroup/PageBannerGroup";
import EventListGroup from "../components/EventListGroup/EventListGroup";

import React, { useState, useEffect } from "react";

const EventGroupListPage = ({ id }) => {
  const [event, setevent] = useState([]);
  const [event_group, seteventGroup] = useState([]);

  // var urlActual = window.location.href;
  // var partesURL = urlActual.split("/");
  // var ultimaParte = partesURL[partesURL.length - 1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    fetch(
      "https://taquillacentral.com/api/event-group/" +
        id.split("-")[id.split("-").length - 1]
    )
      .then((result) => result.json())
      .then((res) => {
        console.log("res group events: ", res);
        setevent(res.eventos);
        seteventGroup(res.grupo_evento[0]);
        console.log(event);
      })
      .catch((res) => {});
  }, [id]);
  return (
    <>
      <PageBannerGroup event={event_group} />
      {/*<EventDetailsGroup event={event_group}/>*/}
      <EventListGroup event={event} />
      <NextEvents />
    </>
  );
};

export default EventGroupListPage;
