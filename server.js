const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.json());
app.use(require("cors")());

// Connect to DB
connectDB();

// Routes
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/clients", require("./routes/clientRoutes"));
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/subscribers", require("./routes/subscriberRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
