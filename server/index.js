import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => console.log("Connected to DB..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello from server");
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("todo/dist"));
}

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${PORT}`)
);
