import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tripProps } from "./Types";
import TripForm from "./TripForm.component";
import { trips } from "../api/TripsDB";

const TripUpdate = () => {
  const [trip, setTrip] = useState<tripProps | null>(null);

  const params = useParams();

  useEffect(() => {
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
