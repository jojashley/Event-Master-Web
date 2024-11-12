import React, { useState } from "react";

interface Supplier {
  email_supplier: string;
  state: boolean;
}

interface Event {
  id: string;
  email_user: string;
  type: string;
  date: string;
  start_time: string;
  end_time: string;
  ubication: string;
  suppliers: Supplier[];
}

interface EventCardProps {
  event: Event;
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
  const handleAccept = () => {
    console.log(`Proveedor "service1@example.com" aceptado para el evento: ${event.type}`);
  };

  // Función para manejar el botón "Cancelar"
  const handleCancel = () => {
    console.log("Cancelar evento:", event.id);
  };

  // Buscar el proveedor "service1@example.com" en los proveedores del evento
  const supplier = event.suppliers.find((supplier) => supplier.email_supplier === "service1@example.com");

  const isSupplierStateTrue = supplier?.state === true;
  const isSupplierStateFalse = supplier?.state === false;

  return (
    <div className="event-card">
      <div className="event-card-header">
        <h3>{event.type}</h3>
        <p>{event.date}</p>
        <button onClick={handleViewMore} className="view-more-btn">
          Ver más
        </button>
      </div>

      {isExpanded && (
        <div className="event-card-details">
          <p><strong>Hora de inicio:</strong> {event.start_time}</p>
          <p><strong>Hora de fin:</strong> {event.end_time}</p>
          <p><strong>Ubicación:</strong> {event.ubication}</p>

          {/* Lógica para mostrar el estado del proveedor */}
          {isSupplierStateTrue && (
            <>
            <p><strong>Estado:</strong> Evento confirmado</p>
            <button onClick={handleCancel} className="accept-btn">
                Cancelar
              </button>
            </>
          )}

          {isSupplierStateFalse && (
            <>
              <p><strong>Estado:</strong> Pendiente de confirmación</p>
              <button onClick={handleAccept} className="accept-btn">
                Aceptar
              </button>
            </>
          )}

          <button onClick={handleViewLess} className="view-less-btn">
            Ver menos
          </button>
        </div>
      )}
    </div>
  );
};
