// import { Schema, SchemaTypes } from "mongoose";
import mongoose from "../../imports";

const TripSchema = new mongoose.Schema({
  id: Number,
  date: Date,
  title: String,
  desc: String,
  destination: String,
  publisher: String,
});

module.exports = mongoose.model("Trip", TripSchema);

// publisher: [
//   {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//   },
// ],
