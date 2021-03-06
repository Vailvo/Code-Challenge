import mongoose from "../../imports";

// TODO: Abstract Cors into method or figure out global strategy
const Trip = require("../models/Trip.model");
// await is waiting for a promise
// the result of the mongoose is then returned
const showTrip = async (req: any, res: any) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3001");

  Trip.findOne({ _id: req.params.id })
    .then((trips: any) => res.json({ trips }))
    .catch((error: any) => res.json({ message: "NOPE", error }));
};

const tripIndex = async (req: any, res: any) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3001");
  Trip.find()
    .then((trips: any) => res.json({ trips }))
    .catch((error: any) =>
      res.json({ message: "Something went wrong", error })
    );
};

const createTrip = async (req: any, res: any) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3001");

  console.log(req.body);
  const { date, title, desc, destination, publisher } = req.body;
  Trip.create({
    date,
    title,
    desc,
    destination,
    publisher,
  })
    .then((trip: any) => res.json({ trip }))
    .catch((error: any) =>
      res.json({ message: "Something went wrong", error })
    );
};

const updateTrip = async (req: any, res: any) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3001");

  const { date, title, desc, destination, publisher } = req.body;
  Trip.findOneAndUpdate(
    { _id: req.params.id },
    { date, title, desc, destination, publisher }
  )
    .then((trip: any) => res.json({ trip }))
    .catch((error: any) =>
      res.json({ message: "Something went wrong", error })
    );
};

const deleteTrip = async (req: any, res: any) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3001");

  Trip.deleteOne({ _id: req.params.id })
    .then((trip: any) => res.json({ trip }))
    .catch((error: any) =>
      res.json({ message: "Something went wrong", error })
    );
};

export default { showTrip, tripIndex, createTrip, updateTrip, deleteTrip };
