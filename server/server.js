/* eslint-disable no-undef */
require('dotenv').config()
const http = require("http");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const api = require("./routes/api");
const { connectDB } = require('./utils/mongodb');
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", methods: ["GET"] }));
app.use(morgan("dev"));
app.use(express.json())

app.use("/api/v1", api);
app.get("*", (req, res) => {
  res.send("route doesn't defined.");
});

server.listen(PORT, async () => {
  await connectDB();
  console.log(`server is running on port:${PORT}`)
});
