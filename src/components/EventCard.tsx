import React, { useState } from "react";
import {EventsSuppliers} from "../types";
import {getSupplier} from "../store";


interface EventCardProps {
  event: EventsSuppliers;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleViewMore = () => {
    setIsExpanded(true);
  };

  const handleViewLess = () => {
    setIsExpanded(false);
  };

  // Función para manejar el clic en "Aceptar" (cuando el proveedor tiene state: false)
  const handleAccept = async () => {
    //update_contracted_service
    if (!event.state){
      try {
        const url: string = `${import.meta.env.VITE_API_URL}update_contracted_service`;
        await fetch(url,{
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_event: event.id,
            email_supplier: getSupplier()?.email,
            new_state: true
          }), // Convierte el objeto a JSON
        });
        alert("Se confirmado correctamente");
        window.location.reload();
      } catch (e) {
        console.log(e);
        alert("Error al cambiar el estado");
      }
    } else {
      alert("El evento ya fue confirmado");
    }
  };

  // Función para manejar el botón "Cancelar"
  const handleCancel = async () => {
    if (event.state){
      try {
        const url: string = `${import.meta.env.VITE_API_URL}update_contracted_service`;
        await fetch(url,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_event: event.id,
            email_supplier: getSupplier()?.email,
            new_state: false
          }), // Convierte el objeto a JSON
        });
        window.location.reload();
        alert("Se cancelo correctamente");
      } catch (e) {
        console.log(e);
        alert("Error al cambiar el estado");
      }
    } else {
      alert("El evento ya fue cancelado");
    }
  };

  return (
    <div className="event-card">
      <div className="event-card-header">
        <h3>{event.type}</h3>
        <p>{event.date}</p>
        {isExpanded ? (
          <>
            <button onClick={handleViewLess} className="view-more-btn">
              Ver menos
            </button>
            <div className="event-card-details">
              <p><strong>Hora de inicio:</strong> {event.start_time}</p>
              <p><strong>Hora de fin:</strong> {event.end_time}</p>
              <p><strong>Ubicación:</strong> {event.ubication}</p>

              {/* Lógica para mostrar el estado del proveedor */}
              {event.state ? (
                <>
                  <p><strong>Estado:</strong> Evento confirmado</p>
                  <button onClick={handleAccept} className="accept-btn">
                    Aceptar
                  </button>
                  <button onClick={handleCancel} className="accept-btn">
                    Cancelar
                  </button>
                </>
              ) : (
                <>
                  <p><strong>Estado:</strong> Pendiente de confirmación</p>
                  <button onClick={handleAccept} className="accept-btn">
                    Aceptar
                  </button>
                  <button onClick={handleCancel} className="accept-btn">
                    Cancelar
                  </button>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <button onClick={handleViewMore} className="view-more-btn">
              Ver más
            </button>
          </>
        )}
      </div>
    </div>
  );
};
