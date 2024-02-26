import express from "express";
import dotenv from "dotenv";
import dbConnect from "./DB/db_config.js";
import router from "./Routes/blogRoutes.js";

dotenv.config({
  path: "./env",
});

//db connection logic

dbConnect();

const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.json({
    message: "hello aman skdhkd",
  });
});

//Routes here add

app.use("/api/blog", router);

app.listen(port, () => {
  console.log(`server at runing at port :${port}`);
});
