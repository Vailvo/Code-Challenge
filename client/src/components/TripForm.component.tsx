import { useState } from "react";
import { tripDestinations } from "../api/TripsDB";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { FieldText, Form, FormRow, DatePicker, Select } from "Form";
import moment from "moment";

type propTypes = {
  update?: boolean;
  id?: number;
  propTitle?: string;
  propDate?: moment.Moment;
  propDesc?: string;
  propDestination?: string;
  propPublisher?: string;
};

const TripForm = ({
  // destructing
  update = false,
  id,
  propTitle,
  propDate,
  propDesc,
  propDestination,
  propPublisher,
}: propTypes) => {
  const [title, setTitle] = useState(propTitle || "");
  const [date, setDate] = useState<moment.Moment>(propDate || moment());
  const [desc, setDesc] = useState(propDesc || "");
  const [destination, setDestination] = useState(propDestination || "");
  const [publisher, setPublisher] = useState(propPublisher || "");

  const handleSubmit = () => {
    console.log("Trip updated!");
  };

  const handleDateChange = (date: moment.Moment) => {
    setDate(date);
  };

  const handleDescChange = (desc: String) => {
    const stringDesc = JSON.stringify(desc);
    setDesc(stringDesc);
  };

  const bottomPadding = {
    marginBottom: "28px",
  };

  return (
    <>
      <Form>
        <FormRow label="Title" style={bottomPadding}>
          <FieldText
            onChange={(event: any) => setTitle(event.target.value)}
            value={title}
          />
        </FormRow>
        <FormRow label="Date" style={bottomPadding}>
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            inline
            fullWidth
            shadow={false}
          />
        </FormRow>
        <FormRow label="Body" style={bottomPadding}>
          <FieldText
            onChange={(e: any) => handleDescChange(e.target.value)}
            value={desc}
          />
        </FormRow>
        <FormRow label="Destination" style={bottomPadding}>
          <Select
            options={tripDestinations}
            value={tripDestinations}
            onChange={(e: any) => setDestination(e.target.value)}
          />
        </FormRow>
        <FormRow label="Author" style={bottomPadding}>
          <FieldText
            onChange={(e: any) => setPublisher(e.target.value)}
            value={publisher}
          />
        </FormRow>
      </Form>
      <Link to={"/"}>Back</Link>
    </>
  );
};

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<TripForm />);

export default TripForm;
