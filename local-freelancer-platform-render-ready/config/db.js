const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error("❌ MONGO_URI is not defined in environment variables");
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Stop hanging after 5 seconds
      socketTimeoutMS: 45000,
    });

    console.log("✅ MongoDB Connected Successfully");

    // Optional: Listen for connection errors after initial connect
    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB runtime error:", err.message);
    });

  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1); // Stop app if DB fails (important for Render)
  }
};

module.exports = connectDB;
