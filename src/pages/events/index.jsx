
import EventsTile from "./components/eventsTile";
import { useEffect, useState } from "react";
import axios from "axios";


const Events = () => {
  //Define a state to store events
  const [events, setEvents] = useState([]);

  //Define a function to fetch events
  const getEvents = async () => {
    const response = await axios.get('https://gomingle-backend.onrender.com/allevents');
    if (response.status === 200) {
      console.log('eve', response.data)
      setEvents(response.data);
    } else {
      setEvents([]);
    }
  }
  //Get events
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-[100px] mx-10">
        {events.map(event => (
          <EventsTile
            title={event.eventName}
            description={event.description}
            location={event.location}
            date={event.date}
            price={event.price}
            image={`https://savefiles.org/${event.image}?shareable_link=283`}
          />

        ))}

      </div>
    </>
  )
}

export default Events;