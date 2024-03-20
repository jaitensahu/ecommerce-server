const express = require("express");
const app = express();
const Router = require("./router/user");
let dotenv = require("dotenv");

dotenv.config();

let mongoose = require("mongoose");
const productRoutes = require("./router/products");

app.use(express.json());
app.use("/user", Router);
app.use("/products", productRoutes);

mongoose
  .connect(process.env.DATABASEURL)
  .then(() => {
    console.log("Database Connection succefully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log("server is running", process.env.PORT);
});
