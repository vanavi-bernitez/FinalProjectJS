import express from "express";
import morgan from "morgan";
import { userRouter } from "./routes/userRouter.js";
import dotenv from "dotenv"; //the video lies :( i yes need to declare this in app.js
dotenv.config({ path: "./config.env" });

const app = express();

console.log(process.env.NODE_ENV);
// Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
// here handle static files

// Mount route --> works like declaration of middleware
app.use("/api/v1/users", userRouter);

export { app };
