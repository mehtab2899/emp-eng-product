import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import Employee from "../models/employeeModel.js";

// @desc Auth employee & get token
// @route POST /api/employee/login
// @access Public
export const authEmployee = asyncHandler(async (req, res) => {
	const { employeeID, password } = req.body;

	const employee = await Employee.findOne({ employeeID });

	if (employee) {
		res.json({
			_id: employee._id,
			employeeID: employee.employeeID,
			token: generateToken(employee._id),
		});
	} else {
		res.status(401);
		throw new Error("Invalid employeeID or password");
	}
});
