require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const productRoute = require("./src/routes/product.route");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the Home Page");
});

app.use("/products", productRoute);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
