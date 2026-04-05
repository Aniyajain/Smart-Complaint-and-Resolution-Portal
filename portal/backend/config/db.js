// MONGO_URI = "mongodb://localhost:27017/smart-complaint/db"
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.log("DB Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;