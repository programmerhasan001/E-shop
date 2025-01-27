import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import products from "./data/products.js";
dotenv.config();
connectDB(); // database connection function call

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Api is running......");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((item) => item?._id === +id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
