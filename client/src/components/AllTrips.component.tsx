import Trip from "./Trip.component";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { tripProps } from "./Types";

import axios from "axios";

const AllTripsComponent = () => {
  //   Declare a new state called trips
  // array deconstructing -- two new variables returned by useState
  // trips, the first item is the current value. the second, setTrips,
  // is a function

  const [trips, setTrips] = useState<tripProps[]>([]);
  // const { id } = useParams();
  // updating current trips with the use of setTrips
  const handleDelete = (id: number) => {
    var error = null;
    axios
      .delete("http://localhost:3000/trips/" + id)
      .then((res) => {})

      .catch((err) => {
        error = err;
        console.log(err);
      });
    if (error) {
      const filteredTrips = trips.filter((trip) => trip.id !== id);
      setTrips(filteredTrips);
    }

    // setTrips is a function itself and updates trips
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/trips")
      .then((res) => {
        console.log("all Trips retrieved:", res.data);
        setTrips(res.data.trips);
      })

      .catch((err) => console.log(err));
  }, []);

  //map creates a new array of trips
  return (
    <>
      {console.log("trips inside of return", trips)}
      <h1>All Trips: </h1>
      {trips?.map((trip, tripId) => {
        console.log(trip);
        return (
          <>
            <ul key={tripId}>
              <li>{trip.title}</li>
              <li>{trip.date.toString()}</li>
              <li>{trip.desc}</li>
              <li>{trip.destination}</li>
              <li>{trip.publisher}</li>
            </ul>

            <br />
            <button onClick={() => handleDelete(trip.id)}>Delete</button>
          </>
        );
      })}

      <br />
      {/* <Link to={`create`}>Create a New Trip</Link> */}
    </>
  );
};

export default AllTripsComponent;
