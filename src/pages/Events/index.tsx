import React from "react";
import { EventCard } from "../../components/EventCard"; 
import './styles.css';

const event = [
    {
        id: '1',
        email_user: 'jojashley@gmail.com',
        type: 'Boda',
        date: '07/11/2024',
        start_time: '17:00',
        end_time: '22:00',
        ubication: 'En la catedral, San Carlos',
        suppliers: [
            { email_supplier: "supplier1@example.com", state: true },
            { email_supplier: "service1@example.com", state: true }
        ]
    },
    {
        id: '2',
        email_user: 'juanperez@yahoo.com',
        type: 'Cumpleaños',
        date: '14/11/2024',
        start_time: '15:00',
        end_time: '19:00',
        ubication: 'En el salón del centro de eventos La Plaza',
        suppliers: [
            { email_supplier: "service1@example.com", state: false }
        ]
    },
    {
        id: '3',
        email_user: 'maria.gomez@gmail.com',
        type: 'Fiesta de empresa',
        date: '20/11/2024',
        start_time: '20:00',
        end_time: '02:00',
        ubication: 'En el salón de conferencias del hotel Panorama',
        suppliers: [
            { email_supplier: "supplier1@example.com", state: false },
            { email_supplier: "supplier2@example.com", state: true },
            { email_supplier: "supplier3@example.com", state: true }
        ]
    },
    {
        id: '4',
        email_user: 'carlos.martinez@yahoo.com',
        type: 'Aniversario',
        date: '25/11/2024',
        start_time: '18:30',
        end_time: '23:30',
        ubication: 'Restaurante La Riviera',
        suppliers: [
            { email_supplier: "service1@example.com", state: false },
            { email_supplier: "service2@example.com", state: true },
            { email_supplier: "service3@example.com", state: false }
        ]
    },
    {
        id: '5',
        email_user: 'lucia.smith@hotmail.com',
        type: 'Conferencia',
        date: '01/12/2024',
        start_time: '09:00',
        end_time: '17:00',
        ubication: 'Centro de convenciones ExpoCity',
        suppliers: [
            { email_supplier: "vendor1@example.com", state: true },
            { email_supplier: "vendor2@example.com", state: false },
            { email_supplier: "vendor3@example.com", state: true }
        ]
    }
];

export const Events: React.FC = () => {
    // Filtrar los eventos que tienen el proveedor "service1@example.com"
    const filteredEvents = event
      .filter((event) => event.suppliers.some((supplier) => supplier.email_supplier === "service1@example.com"))
      .reverse(); // Invertir el orden para mostrar del último al primero
  
    return (
      <div className="event-container">
        <header className="event-header">
          <h1>My events</h1>
        </header>
  
        <div className="event-list">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Events;