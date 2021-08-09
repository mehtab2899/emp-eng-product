import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import Admin from "../models/adminModel.js";

// @desc Auth admin & get token
// @route POST /api/admin/login
// @access Public
const authAdmin = asyncHandler(async (req, res) => {
	const { adminID, password } = req.body;

	const admin = await Admin.findOne({ adminID });

	if (admin && (await admin.matchPassword(password))) {
		res.json({
			_id: admin._id,
			adminID: admin.adminID,
			token: generateToken(admin._id),
		});
	} else {
		res.status(401);
		throw new Error("Invalid adminID or password");
	}
});

// @desc Register a new admin
// @route POST /api/admins
// @access Public
const registerAdmin = asyncHandler(async (req, res) => {
	const { adminID, orgName, password } = req.body;

	const adminExists = await Admin.findOne({ adminID });

	if (adminExists) {
		res.status(400);
		throw new Error("Admin already exists");
	}

	const admin = await Admin.create({
		adminID,
		orgName,
		password,
	});

	if (admin) {
		res.status(201).json({
			_id: admin._id,
			adminID: admin.adminID,
			orgName: admin.orgName,
			token: generateToken(admin._id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid admin data");
	}
});

// @desc Auth admin & get token
// @route POST /api/admins/profile
// @access Public
const getAdminProfile = asyncHandler(async (req, res) => {
	const admin = await Admin.findById(req.admin._id);

	if (admin) {
		res.json({
			_id: admin._id,
			admidID: admin.adminID,
			orgName: admin.orgName,
		});
	} else {
		res.status(404);
		throw new Error("Admin not found");
	}
});

export { authAdmin, registerAdmin, getAdminProfile };
