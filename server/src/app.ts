import dotenv from "dotenv";
import express, { Request } from "express";
import mongoose from "mongoose";
import router from "./routers/trip.router";
import cors from "cors";

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
// server.app.options('*', cors())
server.app.use("/", server.router);
server.app.use((req, res, next) => {
  next();
}, cors({ maxAge: 84600 }));
server.app.use(cors());
// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`Listening on port ${port}`));
})();
