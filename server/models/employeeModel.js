import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
	employeeID: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
