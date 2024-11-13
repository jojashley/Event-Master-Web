import React, {useEffect, useState} from "react";
import { EventCard } from "../../components/EventCard"; 
import './styles.css';
import {EventsSuppliers} from "../../types";
import {getSupplier} from "../../store";


export const Events: React.FC = () => {
    const [events,setEvent] = useState<EventsSuppliers[]>([])

    const getEvents = async (email:string) => {
        try{
            const url: string = `${import.meta.env.VITE_API_URL}get_supplier_events?email_user=${email}`;
            const response = await fetch(url);
            const json = await response.json();
            if(json.state){
                const eventos:EventsSuppliers[] = json.data;
                setEvent(eventos);
            }
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        const supplier = getSupplier();
        if(supplier){
            getEvents(supplier?.email)
        }
    }, []);
  
    return (
      <div className="event-container">
        <header className="event-header">
          <h1>My events</h1>
        </header>
  
        <div className="event-list">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Events;