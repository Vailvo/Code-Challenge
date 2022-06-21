import { Link, useParams } from "react-router-dom";
import { tripProps } from "./Types";

//lexical
import { $getRoot, $getSelection } from "lexical";
import { useEffect } from "react";
// import LexicalComposer from "@lexical/react/LexicalComposer";
// import LexicalPlainTextPlugin from "@lexical/react/LexicalPlainTextPlugin";
// import LexicalContentEditable from "@lexical/react/LexicalContentEditable";
// import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// import LexicalOnChangePlugin from "@lexical/react/LexicalOnChangePlugin";
// import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

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
