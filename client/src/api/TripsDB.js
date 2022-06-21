import moment from "moment";

export const trips = [
  {
    id: 1,
    date: moment(),
    title: "First Trip",
    desc: "Lorem Ipsum first post",
    destination: "Jamaica",
    publisher: "Needlemen",
    slug: "first_trip",
  },
  {
    id: 2,
    date: moment(),
    title: "Second Trip",
    desc: "Lorem Ipsum second post",
    destination: "Bora Bora",
    publisher: "Nova",
    slug: "second_trip",
  },
  {
    id: 3,
    date: moment(),
    title: "Third Trip",
    body: "Lorem Ipsum third post",
    category: "Japan",
    author: "Crawford",
    slug: "third_trip",
  },
];

export const tripDestinations = [
  {
    text: "Jamaica",
    value: "Jamaica",
  },
  {
    text: "Japan",
    value: "Japan",
  },
  {
    text: "Aruba",
    value: "Aruba",
  },
  {
    text: "Bora Bora",
    value: " Bora Bora",
  },
  {
    text: "Italy",
    value: "Italy",
  },
];

export default trips;
