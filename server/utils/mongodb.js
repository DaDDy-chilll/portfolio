/* eslint-disable no-undef */
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.DB);
};

mongoose.connection.once("open", () => console.log("connected successful"));
mongoose.connection.on("error", (error) => console.log(error));

const disconnectDB = () => mongoose.disconnect();

module.exports = { connectDB, disconnectDB };
