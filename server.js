const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
const port = process.env.PORT;

const userRoutes = require("./routes/user.routes");

app.use(express.json());
app.use("/api/user", userRoutes);

app.listen(port, () => {
  connectDB();
  console.log("Server is running on port", port);
});
