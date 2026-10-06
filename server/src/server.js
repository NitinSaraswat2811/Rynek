const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
    res.send("Rynek server is running");
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err.message);
    });

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});