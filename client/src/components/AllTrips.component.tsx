import Trip from "./Trip.component";
import { trips } from "../api/TripsDB";
import { Link } from "react-router-dom";
import { useState } from "react";
import { tripProps } from "./Types";

const AllTripsComponent = () => {
  //   const [trips, setTrips] = useState<tripProps[]>(trips);
  const [trips, setTrips] = useState<tripProps[]>();

  const handleDelete = (id: number) => {
    const filteredTrips = trips.filter((trip) => trip.id !== id);
    setTrips(filteredTrips);
  };
  return (
    <>
      {trips.map((trip) => {
        return (
          <>
            <Trip
              key={trip.id}
              id={trip.id}
              title={trip.title}
              date={trip.date}
              desc={trip.desc}
              destination={trip.destination}
              publisher={trip.publisher}
            />

            <br />
            <button onClick={() => handleDelete(trip.id)}>Delete</button>
          </>
        );
      })}

      <br />
      <Link to={`create`}>Create a New Trip</Link>
    </>
  );
};

export default AllTripsComponent;
