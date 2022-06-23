import Trip from "./Trip.component";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { tripProps } from "./Types";
import { trips, tripOptions } from "../api/TripsDB";
import axios from "axios";

const AllTripsComponent = () => {
  //   Declare a new state called trips
  // array deconstructing -- two new variables returned by useState
  // trips, the first item is the current value. the second, setTrips,
  // is a function

  const [trips, setTrips] = useState<tripProps[]>([]);
  // const { id } = useParams();
  // updating current trips with the use of setTrips
  // const handleDelete = (id: number) => {
  //   const filteredTrips = trips.filter((trip) => trip.id !== id);
  //   setTrips(filteredTrips);
  //   // setTrips is a function itself and updates trips
  // };

  useEffect(() => {
    axios
      .get("http://localhost:3000/trips")
      .then((res) => {
        console.log("all Trips retrieved:", res.data);
        setTrips(res.data.results);
      })

      .catch((err) => console.log(err));
  }, []);

  //map creates a new array of trips
  return (
    <>
      <h1>idubvuikjvedbsuijk</h1>
      {trips.map((trip, tripId) => {
        console.log(trip);
        return (
          <>
            <Trip
              key={tripId}
              id={trip.id}
              title={trip.title}
              date={trip.date}
              desc={trip.desc}
              destination={trip.destination}
              publisher={trip.publisher}
            />

            <br />
            {/* <button onClick={() => handleDelete(trip.id)}>Delete</button> */}
          </>
        );
      })}

      <br />
      <Link to={`create`}>Create a New Trip</Link>
    </>
  );
};

export default AllTripsComponent;
