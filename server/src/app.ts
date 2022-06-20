import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routers/trip.router";

// load the environment variables from the .env file
dotenv.config({
  path: ".env",
});

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
  public app = express();

  public router = router;
}
// Mongoose connection
mongoose.connect("mongodb://localhost:27017/Tutorial", {}).then(() => {
  console.log("Database Connection Initialized");
});
// initialize server app
const server = new Server();
server.app.use(express.json());
server.app.use("/", server.router);

// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`Listening on port ${port}`));
})();
