import express from "express";
const router = express.Router();

import { authEmployee } from "../controllers/employeeController.js";

router.post("/login", authEmployee);

export default router;
