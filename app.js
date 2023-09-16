const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/v1/user.route");


//! middleware's
app.use(express.json());
app.use(cors());



//! user api ------------------------------
app.use("/api/v1/user", userRouter)






//! ---------- Happy Server ----------
app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});




module.exports = app;