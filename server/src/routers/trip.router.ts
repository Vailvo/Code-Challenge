import express, { Router } from "express";
import controller from "../controllers/trip.controller";

const router = Router();
const app = express();

router.get("/trips/:id", controller.showTrip);
router.get("/trips", controller.tripIndex);
router.post("/trips", controller.createTrip);
router.patch("/trips/:id", controller.updateTrip);
router.delete("/trips/:id", controller.deleteTrip);

export default router;
