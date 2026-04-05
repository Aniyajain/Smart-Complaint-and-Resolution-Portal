const complaintRoutes = require("./routes/complaintRoutes");
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/complaints", complaintRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.listen(5000, () => console.log("Server running on port 5000"));