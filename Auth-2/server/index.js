const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const PORT = process.env.PORT || 3002;
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

// Middleware
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/auth", authRoutes);



app.get("/", (req, res) => {
  res.status(200).send("You have landed on Authentication Server 👦")
})

// Database connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Database connected")
})
.catch((err) => {
    console.log(err)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})