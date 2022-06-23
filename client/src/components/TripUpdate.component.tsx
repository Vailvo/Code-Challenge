import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tripProps } from "./Types";
import TripForm from "./TripForm.component";

// Data fetching, setting up a subscription, and manually changing the DOM
//are examples of side effects
const TripUpdate = () => {
  const [trip, setTrip] = useState<tripProps | null>(null);

  const params = useParams();
  // Effect hook preforms side effects in function components
  useEffect(() => {
    // updating id using browser API
    if (params.id) {
      const id = parseInt(params.id);
      setTrip(trip);
    }
  }, []);

  return (
    <>
      {trip && (
        <TripForm
          update
          id={trip.id}
          propTitle={trip.title}
          propDate={trip.date}
          propDesc={trip.desc}
          propDestination={trip.destination}
          propPublisher={trip.publisher}
        />
      )}
    </>
  );
};

export default TripUpdate;
