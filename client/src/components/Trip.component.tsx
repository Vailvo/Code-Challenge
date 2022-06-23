import { Link, useParams } from "react-router-dom";
import { tripProps } from "./Types";

const Trip = ({ id, date, title, desc, destination, publisher }: tripProps) => {
  const params = useParams();

  let label;
  let location;

  if (params.id) {
    label = "Back to Home";
    location = "/";
  } else {
    location = `/${id}`;
    label = `Show${title}`;
  }

  return (
    <>
      <div>{title}</div>
      <div>{id}</div>
      <div>{date.toString()}</div>
      <div>{desc}</div>
      <div>{destination}</div>
      <div>{publisher}</div>
      <Link to={location}>{label}</Link>
      <br />
      <Link to={`/${id}/update`}>Update</Link>{" "}
    </>
  );
};

export default Trip;
