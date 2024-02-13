import { useEffect, useState } from 'react'
import { Typography } from "@mui/material";

const Ticket = ({ thumb, event, updateEvents }) => {
  const [ticketCount, setTicketCount] = useState(0)

  const handleIncr = (e) => {
    if(ticketCount < 10){
      setTicketCount(ticketCount + 1);
    }
  }
  
  const handleDec = () => {
    if(ticketCount > 0){
      setTicketCount(ticketCount - 1);
    }
  }

  useEffect(()=>{
    const updatedEvent = { ...event, onBuy: ticketCount };
    updateEvents(updatedEvent);
  },[ticketCount])

  return (
    <div className='ticket-item'>
      <div className='ticket-content'>
        <img src={event.url_imagen} alt='' style={{ maxWidth: '20%', maxHeight: '20%', objectFit: 'cover', borderRadius: '10px', aspectRatio: '1 / 1' }}/>
        <div className='ticket-item-details'>
          <h4>{event.nombre}</h4>
          <Typography component="p" style={{whiteSpace: 'pre-line'}}>
                {event.descripcion} 
              </Typography>
        </div>
      </div>
      <div className='ticket-item-price'>
        <p className='ticket-price'>
        {parseFloat(event.precio_compra).toFixed(2)}€ <span>(+ {parseFloat(event.comision).toFixed(2)}€ g.d.g.)</span>
        </p>
        <div className='ticket-count'>
          <button onClick={handleDec}>-</button>
          <input
            min={0}
            max={event.tickets_a_la_venta > 10 ? 10 : event.tickets_a_la_venta}
            readOnly
            onChange={(e) => {
              setTicketCount(e.target.value);
            }}
            type='text'
            value={ticketCount}
          />
          <button onClick={handleIncr} disabled={ticketCount == event.tickets_a_la_venta}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Ticket
