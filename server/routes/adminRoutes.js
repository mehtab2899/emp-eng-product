import express from "express";
const router = express.Router();

import {
	authAdmin,
	registerAdmin,
	getAdminProfile,
} from "../controllers/adminController.js";
import { protect } from "../middlewares/authMiddleware.js";

router.route("/").post(registerAdmin);
router.post("/login", authAdmin);
router.route("/profile").get(protect, getAdminProfile);

export default router;
