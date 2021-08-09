import bcrypt from "bcryptjs";

const employees = [
	{
		employeeID: "Emp123",
		password: bcrypt.hashSync("12345", 10),
	},
	{
		employeeID: "Emp456",
		password: bcrypt.hashSync("12345", 10),
	},
	{
		employeeID: "Emp789",
		password: bcrypt.hashSync("12345", 10),
	},
	{
		employeeID: "Emp111",
		password: bcrypt.hashSync("12345", 10),
	},
	{
		employeeID: "Emp122",
		password: bcrypt.hashSync("12345", 10),
	},
];

export default employees;
