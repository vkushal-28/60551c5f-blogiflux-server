const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/userRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const commentRoutes = require("./routes/commentRoutes");
const tagRoutes = require("./routes/tagRoutes");
const serviceAccountKey = require("./firebase-secret.json");
const admin = require("firebase-admin");

const app = express();
dotenv.config();

// Connect to MongoDB
connectDB();

// Firebase config
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

// Middleware
app.use(bodyParser.json());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});

// Routes
app.use("/api", blogRoutes);
app.use("/api", userRoutes);
app.use("/api", notificationRoutes);
app.use("/api", commentRoutes);
app.use("/api", tagRoutes);

// Error handling
app.use((err, req, res, next) => {
  res.status(500).json({ error: "Server error" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
