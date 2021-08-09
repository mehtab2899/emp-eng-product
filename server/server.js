import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import cors from "cors";
import { Server } from "socket.io";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

// importing routes
import adminRoutes from "./routes/adminRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";

// import users
import {
  userJoin,
  userLeaves,
  getCurrentUser,
  getProjectUsers,
} from "./users.js";

// config dotenv environments
dotenv.config();

// db connection
connectDB();

// config app
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
app.use(express.json());
app.use(cors());

// api end point
app.use("/api/admins", adminRoutes);
app.use("/api/employees", employeeRoutes);

// error handlers
app.use(notFound);
app.use(errorHandler);

// socketio
io.on("connection", (socket) => {
  console.log("connections done!");

  socket.on("join", ({ name, project }) => {
    const user = userJoin(socket.id, name, project);
    socket.join(user.project);

    // welcome current user
    socket.emit("message", {
      user: "Admin",
      text: `${user.name}, welcome to the project ${user.project}`,
    });

    // Broadcast when a user connects
    socket.broadcast
      .to(user.project)
      .emit("message", { user: "Admin", text: `${user.name} has joined!` });

    // get all user of the project
    io.to(user.project).emit("projectData", {
      project: user.project,
      users: getProjectUsers(user.project),
    });
  });

  // listen  for chat message
  socket.on("chatMessage", (msg, cb) => {
    const user = getCurrentUser(socket.id);

    io.to(user.project).emit("message", { user: user.name, text: msg });

    cb();
  });

  // when user disconnect
  socket.on("disconnect", () => {
    const user = userLeaves(socket.id);

    if (user) {
      io.to(user.project).emit("message", {
        user: "Admin",
        text: `${user.name} has left the chat`,
      });
      io.to(user.project).emit("projectData", {
        project: user.project,
        users: getProjectUsers(user.project),
      });
    }
  });
});

// config port
server.listen(process.env.PORT, () => {
  console.log(
    `application is running on ${process.env.PORT}`.yellow.bold.underline
  );
});
