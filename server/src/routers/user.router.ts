import express, { Router } from "express";
import controller from "../controllers/user.controller";

const router = Router();
const app = express();

router.get("/users/:id", controller.showUser);
router.get("/users", controller.userIndex);
router.post("/users", controller.createUser);

export default router;
