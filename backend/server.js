import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
connectDB(); // database connection function call

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Api is running......");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
